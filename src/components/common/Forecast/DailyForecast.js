import { useContext } from 'react';
import ScrollingMenu from './ScrollingMenu/ScrollingMenu';
import UnitsContext from '../../../context/units-context';
import { unixToDateTime, dateTimeIsNight, getShortTime } from '../../../utils/date-utils';
import DayForecastItem from './ForecastItem/DayForecastItem';

const DailyForecast = props => {
    const { locale } = useContext(UnitsContext);

    return (
        <ScrollingMenu isDesktop={props.isDesktop}>
            {props.data.map(hour => {
                const dt = unixToDateTime(hour.dt, props.timezone, locale);
                return (
                    <DayForecastItem
                        time={getShortTime(dt)}
                        weatherId={hour.weather[0].id}
                        temp={Math.round(hour.temp)}
                        isNight={dateTimeIsNight(dt)}
                        key={hour.dt}
                        itemId={hour.dt}
                        isDesktop={props.isDesktop}
                    />
                );
            })}
        </ScrollingMenu>
    );
};

export default DailyForecast;