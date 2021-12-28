import { useContext, useState, useCallback } from 'react';
import WeatherContext from '../../context/weather-context';
import styled from 'styled-components';
import WeatherIcon from './WeatherIcon';
import { toTitleCase } from '../../utils/string-utils';
import Temperature from './CurrentTemperature';
import CurrentTime from './CurrentTime';
import { dateTimeIsNight } from '../../utils/date-utils';
import SecondaryDetails from './SecondaryDetails/ScondaryDetails';

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

const Break = styled.hr`
    width: 90%;
    border: 0;
    margin: 0;
    margin-top: 3rem;
    border: 1px solid ${props => props.theme.backgroundGray};
`;

const CurrentWeather = () => {
    const { weatherData } = useContext(WeatherContext);
    const currentWeatherData = weatherData.current.weather[0];
    const weatherId = currentWeatherData.id;
    const weatherDescription = toTitleCase(currentWeatherData.description);
    const [isNight, setIsNight] = useState(false);

    const isNightHandler = useCallback(dt => {
        setIsNight(dateTimeIsNight(dt));
    }, []);

    return (
        <CurrentWeatherWrapper>
            <IconWrapper>
                <WeatherIcon id={weatherId} isNight={isNight} />
            </IconWrapper>
            <WeatherDescription>{weatherDescription}</WeatherDescription>
            <Temperature />
            <CurrentTime onUpdate={isNightHandler} />
            <SecondaryDetails />
            <Break />
        </CurrentWeatherWrapper>
    );
};

export default CurrentWeather;
