import { useState, useContext, Fragment } from 'react';
import styled from "styled-components";
import SimpleBar from 'simplebar-react';
import "simplebar/src/simplebar.css";
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
    min-width: 20rem;
    padding: 2rem;
    box-sizing: border-box;
`;

const SideBar = () => {
    const { isBusy: weatherCtxBusy } = useContext(WeatherContext);
    const { isBusy: cityCtxBusy } = useContext(CityContext);
    const [showContent, setShowContent] = useState(true);

    const isSearchingHandler = newShowContent => {
        setShowContent(newShowContent);
    };

    return (
        <SimpleBar style={{ width: "20%", height: "100%", minWidth: "20rem" }}>
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
        </SimpleBar>
    );
};

export default SideBar;