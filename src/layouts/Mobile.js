import { useContext, Fragment } from 'react';
import styled from 'styled-components';
import CityName from '../components/common/CityName';
import CurrentWeather from '../components/common/CurrentWeather';
import Forecast from '../components/mobile/Forecast/Forecast';
import Header from '../components/mobile/Header';
import WeatherContext from '../context/weather-context';
import CityContext from '../context/city-context';
import Highlights from '../components/mobile/Highlights';


const MobileWrapper = styled.main`
    margin: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Break = styled.hr`
    width: 90%;
    border: 0;
    margin: 0;
    margin-top: 1.5rem;
    border: 1px solid ${props => props.theme.backgroundGray};
    opacity: 0.5;
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
                    <Break />
                    <Forecast />
                    <Break />
                    <Highlights />
                </Fragment>
            }
            {(weatherCtxBusy || cityCtxBusy) && <p>Loading...</p>}
        </MobileWrapper>
    );
};

export default Mobile;
