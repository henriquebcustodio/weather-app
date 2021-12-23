import { useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const SearchWrapper = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    height: 2rem;
    box-shadow: ${props => {
        if (props.focused) {
            return '0 2px ' + props.theme.horizontalSeparatorGray;
        }
        return 'none';
    }};
`;

const Input = styled.input`
    color: black;
    font-weight: 600;
    font-family: inherit;
    font-size: 1rem;
    text-overflow: ellipsis;
    outline: none;
    width: 100%;
    height: 100%;
    margin-left: 1rem;
    box-sizing: border-box;
    padding: 0;
    border: none;
    

    &::placeholder {
        color: inherit;
    }
`;

const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 3px;
`;

const Search = () => {
    const [isFocused, setIsFocused] = useState(false);

    const focusHandler = () => {
        setIsFocused(true);
    };

    const blurHandler = () => {
        setIsFocused(false);
    };

    return (
        <SearchWrapper focused={isFocused} autocomplete="false">
            <Label htmlFor="search">
                <FiSearch size="1.3rem" />
            </Label>
            <Input
                placeholder="Search for places..."
                id="search"
                type="search"
                onFocus={focusHandler}
                onBlur={blurHandler}
                autocomplete="off"
            />
        </SearchWrapper>
    );
};

export default Search;
