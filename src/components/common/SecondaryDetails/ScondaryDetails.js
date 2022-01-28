import { useContext } from 'react';
import styled from 'styled-components';
import WeatherContext from '../../../context/weather-context';
import UnitsContext from '../../../context/units-context';
import DetailsCard from './DetailsCard';
import { FiDroplet, FiSun, FiWind } from 'react-icons/fi';
import { useTheme } from 'styled-components';

const SecondaryDetailsWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
    width: 100%;
    max-width: 35rem;
`;

const SecondaryDetails = () => {
    const theme = useTheme();
    const { weatherData } = useContext(WeatherContext);
    const { unitsToDisplay } = useContext(UnitsContext);

    return (
        <SecondaryDetailsWrapper>
            <DetailsCard
                icon={<FiSun size='1.5rem' style={{
                    color: theme.blue,
                }} />}
                value={`${weatherData.current.uvi}`}
                description='UVI'
            />
            <DetailsCard
                icon={<FiDroplet size='1.5rem' style={{
                    color: theme.blue,
                }} />}
                value={`${weatherData.current.humidity}%`}
                description='Humidity'
            />
            <DetailsCard
                icon={<FiWind size='1.5rem' style={{
                    color: theme.blue,
                }} />}
                value={`${weatherData.current.wind_speed} ${unitsToDisplay.speed}`}
                description='Wind'
            />
        </SecondaryDetailsWrapper>
    );
};

export default SecondaryDetails;
