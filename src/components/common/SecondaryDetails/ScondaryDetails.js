import { useContext } from 'react';
import styled from 'styled-components';
import WeatherContext from '../../../context/weather-context';
import DetailsCard from './DetailsCard';
import { FiDroplet, FiSun, FiWind } from 'react-icons/fi';
import { useTheme } from 'styled-components';

const SecondaryDetailsWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2.5rem;
    width: 100%;
`;

const SecondaryDetails = () => {
    const theme = useTheme();
    const { weatherData } = useContext(WeatherContext);

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
                value={`${weatherData.current.wind_speed} km/h`}
                description='Wind'
            />
        </SecondaryDetailsWrapper>
    );
};

export default SecondaryDetails;
