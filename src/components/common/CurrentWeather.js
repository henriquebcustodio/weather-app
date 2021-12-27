import { useContext } from 'react';
import WeatherContext from '../../context/weather-context';
import styled from 'styled-components';
import WeatherIcon from './WeatherIcon';
import { toTitleCase } from '../../utils/string-utils';
import Temperature from './CurrentTemperature';
import CurrentDate from './CurrentDate';

const CurrentWeatherWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10rem;
`;

const WeatherDescription = styled.p`
    margin: 0;
    margin-top: 1rem;
    font-weight: 500;
`;

const CurrentWeather = () => {
    const { data: weatherData } = useContext(WeatherContext);
    const currentWeatherData = weatherData.current.weather[0];
    const weatherId = currentWeatherData.id;
    const weatherDescription = toTitleCase(currentWeatherData.description);
    const isNight = false;

    return (
        <CurrentWeatherWrapper>
            <IconWrapper>
                <WeatherIcon id={weatherId} isNight={isNight} />
            </IconWrapper>
            <WeatherDescription>{weatherDescription}</WeatherDescription>
            <Temperature />
            <CurrentDate />
        </CurrentWeatherWrapper>
    );
};

export default CurrentWeather;
