import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import SearchDropdown from './SearchDropdown';
import geoDBApi from '../../../services/geodb-cities';

const InputWrapper = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    height: 2rem;
`;

const SearchWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Input = styled.input`
    color: black;
    font-weight: 600;
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
    cursor: pointer;

    &::placeholder {
        color: inherit;
        opacity: 1;
    }
`;

const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 2px;
    cursor: pointer;
`;

const Search = props => {
    const [isFocused, setIsFocused] = useState(false);
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const inputRef = useRef();

    const queryChangeHandler = event => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const fetchData = async query => {
            try {
                const response = await geoDBApi.get("/cities", {
                    params: {
                        limit: 10,
                        namePrefix: query
                    }
                });
                return response.data.data;
            } catch (err) {
                console.log('An error has ocurred while fetching city data.', err);
            }
        };

        const timer = setTimeout(async () => {
            if (query.length >= 2) {
                const data = await fetchData(query);
                setSearchResults(data);
            } else {
                setSearchResults([]);
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [query]);

    const focusHandler = () => {
        setIsFocused(true);
        props.onFocus();
    };

    const blurHandler = () => {
        setIsFocused(false);
        clearInput();
        props.onBlur();
    };

    const clearInput = () => {
        inputRef.current.value = '';
        setSearchResults([]);
    };

    return (
        <SearchWrapper>
            <InputWrapper focused={isFocused} autocomplete="false">
                {isFocused &&
                    <Label
                        onClick={blurHandler}
                    >
                        <FiArrowLeft size={"1.3rem"} />
                    </Label>
                }
                {!isFocused &&
                    <Label htmlFor="search">
                        <FiSearch size={"1.3rem"} />
                    </Label>
                }
                <Input
                    placeholder="Search for places..."
                    id="search"
                    type="search"
                    onFocus={focusHandler}
                    autocomplete="off"
                    ref={inputRef}
                    onChange={queryChangeHandler}
                />
            </InputWrapper>
            {isFocused && <SearchDropdown results={searchResults} onResultSelected={blurHandler} />}
        </SearchWrapper>
    );
};

export default Search;
