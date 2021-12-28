import { useContext, Fragment } from 'react';
import styled from 'styled-components';
import CityName from '../components/common/CityName';
import CurrentWeather from '../components/common/CurrentWeather';
import Forecast from '../components/mobile/Forecast/Forecast';
import Header from '../components/mobile/Header';
import WeatherContext from '../context/weather-context';
import CityContext from '../context/city-context';


const MobileWrapper = styled.main`
    margin: 2rem 1rem;
`;

const Mobile = () => {
    const { isBusy: weatherCtxBusy } = useContext(WeatherContext);
    const { isBusy: cityCtxBusy } = useContext(CityContext);

    return (
        <MobileWrapper>
            <Header />
            {(!weatherCtxBusy && !cityCtxBusy) &&
                <Fragment>
                    <CityName />
                    <CurrentWeather />
                    <Forecast />
                </Fragment>
            }
            {(weatherCtxBusy || cityCtxBusy) && <p>Loading...</p>}
        </MobileWrapper>
    );
};

export default Mobile;
