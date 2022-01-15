import { useContext, Fragment } from 'react';
import styled from 'styled-components';
import colorScheme from '../colors/color-scheme';
import CityName from '../components/common/CityName';
import CurrentWeather from '../components/common/CurrentWeather';
import Forecast from '../components/mobile/Forecast/Forecast';
import Header from '../components/mobile/Header';
import WeatherContext from '../context/weather-context';
import CityContext from '../context/city-context';
import Highlights from '../components/mobile/Highlights';
import ReactLoading from 'react-loading';

const MobileWrapper = styled.main`
    padding: 1.5rem;
    box-sizing: border-box;
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

const LoadingWrapper = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
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
            {(weatherCtxBusy || cityCtxBusy) &&
                <LoadingWrapper>
                    <ReactLoading
                        type={'bubbles'}
                        color={colorScheme.blue}
                        height={'7rem'}
                        width={'7rem'}
                    />
                </LoadingWrapper>
            }
        </MobileWrapper>
    );
};

export default Mobile;
