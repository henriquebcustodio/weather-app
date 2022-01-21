import { useState, useRef, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FiSearch, FiArrowLeft, FiXCircle } from 'react-icons/fi';
import SearchDropdown from './SearchDropdown';
import teleportAPI from '../../../services/teleport-api';

const SearchWrapper = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    height: 2rem;
    background-color: white;
`;

const Input = styled.input`
    color: black;
    font-weight: 500;
    font-family: inherit;
    font-size: 1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
    outline: none;
    width: 100%;
    height: 100%;
    margin-left: 1rem;
    box-sizing: border-box;
    padding: 0;
    border: none;

    &::placeholder {
        color: inherit;
        opacity: 1;
    }
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 2px;
    cursor: pointer;

    svg {
        height: 1.3rem;
        width: 1.3rem;
    }
`;

const Search = props => {
    const [isSearching, setIsSearching] = useState(false);
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const inputRef = useRef();

    const queryChangeHandler = event => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const fetchData = async query => {
            try {
                const response = await teleportAPI.get("/cities/", {
                    params: {
                        search: query,
                        embed: 'city:search-results/city:item'
                    },
                });
                return response.data._embedded['city:search-results'].slice(0, 10);
            } catch (err) {
                console.log('An error has ocurred while fetching city data.', err);
                return [];
            }
        };

        const timer = setTimeout(async () => {
            if (query.length >= 2) {
                const data = await fetchData(query);
                setSearchResults(data);
            } else {
                setSearchResults([]);
            }
        }, 250);

        return () => {
            clearTimeout(timer);
        };
    }, [query]);

    const startSearch = () => {
        if (!isSearching) {
            setIsSearching(true);
            props.onSearchStart();
        }
    };

    const resetQuery = () => {
        setQuery('');
        setSearchResults([]);
    };

    const endSearch = () => {
        setIsSearching(false);
        resetQuery();
        props.onSearchEnd();
    };

    const clearInput = () => {
        resetQuery();
        focusInput();
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    const blurInput = () => {
        document.activeElement.blur();
    };

    return (
        <Fragment>
            <SearchWrapper isSearching={isSearching} autocomplete="false">
                {isSearching &&
                    <Icon
                        onClick={endSearch}
                        aria-label="back"
                    >
                        <FiArrowLeft />
                    </Icon>
                }
                {!isSearching &&
                    <Icon
                        onClick={focusInput}
                    >
                        <FiSearch />
                    </Icon>
                }
                <Input
                    placeholder="Search for places..."
                    type="text"
                    aria-label="search"
                    onFocus={startSearch}
                    autocomplete="off"
                    ref={inputRef}
                    onChange={queryChangeHandler}
                    value={query}
                />
                {isSearching && (query.length > 0) &&
                    <Icon
                        onClick={clearInput}
                    >
                        <FiXCircle />
                    </Icon>
                }
            </SearchWrapper>
            {isSearching &&
                ReactDOM.createPortal(
                    <SearchDropdown
                        results={searchResults}
                        onResultSelected={endSearch}
                        blurInput={blurInput}
                    />, props.searchDropdownContainer)
            }
        </Fragment>
    );
};

export default Search;
