import { useContext } from 'react';
import styled from 'styled-components';
import { FiMapPin } from 'react-icons/fi';
import SearchListItem from './SearchListItem';
import CityContext from '../../../context/city-context';

const DropdownList = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    background-color: white;
    border: 1px solid ${props => props.theme.backgroundGray};
    box-sizing: border-box;
    border-radius: 5px;
    margin: 0;
    margin-top: 0.5rem;
    padding: 0 1rem;
    padding-top: 1rem;
`;

const CurrentLocationLi = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: ${props => props.theme.blue};
    cursor: pointer;
`;

const SearchDropdown = props => {
    const { updateCity, getCurrentLocation } = useContext(CityContext);

    const searchResultClickHandler = cityData => {
        updateCity(cityData);
        props.onResultSelected();
    };

    const currentLocationClickHandler = () => {
        getCurrentLocation();
        props.onResultSelected();
    };

    return (
        <DropdownList>
            {props.results.length === 0 &&
                <CurrentLocationLi onClick={currentLocationClickHandler}>
                    <FiMapPin style={{ marginRight: '0.5rem' }} />
                    Use Current location
                </CurrentLocationLi>
            }
            {props.results.length > 0 &&
                props.results.map(result => {
                    return <SearchListItem
                        data={result}
                        key={result.id}
                        onClick={searchResultClickHandler}
                    />;
                })}
        </DropdownList>
    );
};

export default SearchDropdown;
