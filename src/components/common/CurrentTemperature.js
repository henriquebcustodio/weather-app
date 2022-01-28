import { useContext } from 'react';
import styled from 'styled-components';
import WeatherContext from "../../context/weather-context";
import UnitsContext from "../../context/units-context";

const TemperatureWrapper = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;

    p {
        margin: 0;
        text-align: top;
        font-size: 5rem;
        line-height: 5rem;
    }

    span {
        font-size: 3rem;
        font-weight: 500;
    }
`;

const Temperature = () => {
    const { weatherData } = useContext(WeatherContext);
    const { unitsToDisplay } = useContext(UnitsContext);
    const currentTemperature = Math.round(weatherData.current.temp);

    return (
        <TemperatureWrapper>
            <p>{currentTemperature}</p>
            <span>{unitsToDisplay.temperature}</span>
        </TemperatureWrapper>
    );
};

export default Temperature;
