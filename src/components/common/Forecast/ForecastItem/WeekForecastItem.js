import WeatherIcon from '../../WeatherIcon';
import { ForecastItemCard, IconWrapper, TemperatureWrapper } from './styles';

const WeekForecastItem = props => {
    return (
        <ForecastItemCard isDesktop={props.isDesktop}>
            <span>{props.weekDayShort}</span>
            <IconWrapper>
                <WeatherIcon id={props.weatherId} isNight={false} />
            </IconWrapper>
            <TemperatureWrapper>
                <span>{props.maxTemp}°</span>
                <span>{props.minTemp}°</span>
            </TemperatureWrapper>
        </ForecastItemCard>
    );
};

export default WeekForecastItem;
