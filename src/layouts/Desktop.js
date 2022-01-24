import { useContext, Fragment } from 'react';
import styled from 'styled-components';
import WeatherContext from '../context/weather-context';
import CityContext from '../context/city-context';
import MainSection from '../components/desktop/MainSection';
import SideBar from '../components/desktop/SideBar';

const DesktopWrapper = styled.main`
    display: flex;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
`;

const Desktop = () => {
    const { isBusy: weatherCtxBusy } = useContext(WeatherContext);
    const { isBusy: cityCtxBusy } = useContext(CityContext);

    return (
        <DesktopWrapper>
            {(!weatherCtxBusy && !cityCtxBusy) &&
                <Fragment>
                    <SideBar />
                    <MainSection />
                </Fragment>
            }
        </DesktopWrapper>
    );
};

export default Desktop;
