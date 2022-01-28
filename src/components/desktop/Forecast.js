import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import WeatherContext from '../../context/weather-context';
import ForecastScroll from '../common/Forecast/ForecastScroll';

const ForecastWrapper = styled.section`
    display: block;
    max-width: 69rem;
    width: 100%;
    margin-top: 3rem;
`;

const Forecast = props => {
    const { weatherData } = useContext(WeatherContext);
    const [isWeekly, setIsWeekly] = useState(true);
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        if (props.isWeekly) {
            setForecastData(weatherData.daily);
            setIsWeekly(true);
        } else {
            setForecastData(weatherData.hourly.slice(1, 25));
            setIsWeekly(false);
        }
    }, [props.isWeekly, weatherData]);

    return (
        <ForecastWrapper>
            {forecastData &&
                <ForecastScroll
                    data={forecastData}
                    timezone={weatherData.timezone}
                    isWeekly={isWeekly}
                    isDesktop={true}
                />
            }
        </ForecastWrapper>
    );
};

export default Forecast;