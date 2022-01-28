import { useState, useContext, useCallback } from 'react';
import styled from 'styled-components';
import WeatherContext from '../../context/weather-context';
import ForecastSpan from "../common/Forecast/ForecastSpan";
import ForecastScroll from '../common/Forecast/ForecastScroll';

const ForecastWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1.5rem;

    menu {
        margin-bottom: 1.5rem;
    }
`;

const Forecast = () => {
    const { weatherData } = useContext(WeatherContext);
    const [forecastData, setForecastData] = useState([]);
    const [isWeekly, setIsWeekly] = useState();

    const forecastSpanChangeHandler = useCallback(newSpan => {
        if (newSpan === 'week') {
            setForecastData(weatherData.daily);
            setIsWeekly(true);
        } else {
            setForecastData(weatherData.hourly.slice(1, 25));
            setIsWeekly(false);
        }
    }, [weatherData]);

    return (
        <ForecastWrapper>
            <ForecastSpan onChange={forecastSpanChangeHandler} />
            {forecastData &&
                <ForecastScroll
                    data={forecastData}
                    timezone={weatherData.timezone}
                    isWeekly={isWeekly}
                />
            }
        </ForecastWrapper>
    );
};

export default Forecast;
