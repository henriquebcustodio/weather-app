import { useContext } from "react";
import ScrollingMenu from './ScrollingMenu/ScrollingMenu';
import UnitsContext from "../../../context/units-context";
import { unixToDateTime } from "../../../utils/date-utils";
import WeekForecastItem from "./ForecastItem/WeekForecastItem";

const WeeklyForecast = props => {
    const { locale } = useContext(UnitsContext);

    return (
        <ScrollingMenu isDesktop={props.isDesktop}>
            {props.data.map(day => {
                const dt = unixToDateTime(day.dt, props.timezone, locale);
                return (
                    <WeekForecastItem
                        weekDayShort={dt.weekdayShort}
                        weatherId={day.weather[0].id}
                        maxTemp={Math.round(day.temp.max)}
                        minTemp={Math.round(day.temp.min)}
                        key={day.dt}
                        itemId={day.dt}
                        isDesktop={props.isDesktop}
                    />
                );
            })}
        </ScrollingMenu>
    );
};

export default WeeklyForecast;