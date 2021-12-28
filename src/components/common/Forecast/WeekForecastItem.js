import styled from 'styled-components';
import WeatherIcon from '../WeatherIcon';

const ForecastItemWrapper = styled.li`
    margin: 0 1rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 5rem;
    font-weight: 500;

`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 100%;
    margin: 1rem 0;
`;

const TemperatureWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        margin: 0 4px;
        :nth-of-type(2) {
            color: ${props => props.theme.headerGray};
        }
    }
`;

const WeekForecastItem = props => {
    return (
        <ForecastItemWrapper>
            <span>{props.weekDayShort}</span>
            <IconWrapper>
                <WeatherIcon id={props.weatherId} isNight={false} />
            </IconWrapper>
            <TemperatureWrapper>
                <span>{props.maxTemp}°</span>
                <span>{props.minTemp}°</span>
            </TemperatureWrapper>
        </ForecastItemWrapper>
    );
};

export default WeekForecastItem;
