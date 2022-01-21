import { useState, useContext, Fragment } from 'react';
import styled from "styled-components";
import WeatherContext from '../../context/weather-context';
import CityContext from '../../context/city-context';
import CityName from '../common/CityName';
import CurrentWeather from '../common/CurrentWeather';
import Header from '../common/Header';

const SideBarWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    min-width: 17rem;
    padding: 2rem;
    overflow-y: auto;
`;

const SideBar = () => {
    const { isBusy: weatherCtxBusy } = useContext(WeatherContext);
    const { isBusy: cityCtxBusy } = useContext(CityContext);
    const [showContent, setShowContent] = useState(true);

    const isSearchingHandler = newShowContent => {
        setShowContent(newShowContent);
    };

    return (
        <SideBarWrapper id="sidebar">
            <Header
                isDesktop={true}
                setShowContent={isSearchingHandler}
                searchDropdownContainer={document.getElementById('sidebar')}
            />
            {(!weatherCtxBusy && !cityCtxBusy && showContent) &&
                <Fragment>
                    <CityName />
                    <CurrentWeather />
                </Fragment>
            }
        </SideBarWrapper>
    );
};

export default SideBar;