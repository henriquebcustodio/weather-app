import { useContext } from 'react';
import styled from 'styled-components';
import WeatherContext from "../../context/weather-context";

const TemperatureWrapper = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    span {
        font-weight: 400;
        font-size: 4.5rem;
    }
`;

const Temperature = () => {
    const { weatherData } = useContext(WeatherContext);
    const currentTemperature = Math.round(weatherData.current.temp);

    return (
        <TemperatureWrapper>
            <span>{currentTemperature}°C</span>
        </TemperatureWrapper>
    );
};

export default Temperature;
