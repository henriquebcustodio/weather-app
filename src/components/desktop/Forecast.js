import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import WeatherContext from '../../context/weather-context';
import ForecastScroll from '../common/Forecast/ForecastScroll';

const ForecastWrapper = styled.section`
    display: block;
    max-width: 69rem;
    margin-top: 1.5rem;
`;

const Forecast = props => {
    const { weatherData } = useContext(WeatherContext);
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        props.isWeekly ?
            setForecastData(weatherData.daily) :
            setForecastData(weatherData.hourly.slice(1, 25));
    }, [props.isWeekly, weatherData]);

    return (
        <ForecastWrapper>
            {forecastData &&
                <ForecastScroll
                    data={forecastData}
                    timezone={weatherData.timezone}
                    isWeekly={props.isWeekly}
                    isDesktop={true}
                />
            }
        </ForecastWrapper>
    );
};

export default Forecast;