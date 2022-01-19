import { useContext } from 'react';
import styled from 'styled-components';
import { BiTargetLock } from 'react-icons/bi';
import SearchListItem from './SearchListItem';
import CityContext from '../../../context/city-context';

const DropdownWrapper = styled.div`
    display: block;
    width: 100%;
`;

const DropdownList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    background-color: white;
    box-sizing: border-box;
    border-radius: 5px;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    animation: slide-down 200ms ease-in-out;

    @keyframes slide-down {
        from {
            opacity: 0;
            transform: translateY(60%)
        }
        to {
            opacity: 1;
            transform: translateY(0)
        }
    }
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

    const onTouchStartHandler = event => {
        props.blurInput();
    };

    return (
        <DropdownWrapper>
            <DropdownList onTouchStart={onTouchStartHandler}>
                {props.results.length === 0 &&
                    <SearchListItem
                        onClick={currentLocationClickHandler}
                        data={{ full_name: 'Use Current Location' }}
                        customIcon={<BiTargetLock />}
                    >
                    </SearchListItem>
                }
                {props.results.length > 0 &&
                    props.results.map(result => {
                        return <SearchListItem
                            data={result._embedded['city:item']}
                            key={result._embedded['city:item'].geoname_id}
                            onClick={searchResultClickHandler}
                        />;
                    })}
            </DropdownList>
        </DropdownWrapper>
    );
};

export default SearchDropdown;
