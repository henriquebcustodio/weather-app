import WeatherIcon from '../../WeatherIcon';
import { ForecastItemCard, IconWrapper, TemperatureWrapper } from './styles';

const DayForeCastItem = props => {
    return (
        <ForecastItemCard isDesktop={props.isDesktop}>
            <span>{props.time}</span>
            <IconWrapper>
                <WeatherIcon id={props.weatherId} isNight={props.isNight} />
            </IconWrapper>
            <TemperatureWrapper>
                <span>{props.temp}°</span>
            </TemperatureWrapper>
        </ForecastItemCard>
    );
};

export default DayForeCastItem;