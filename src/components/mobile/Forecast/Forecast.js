import { useState, useContext, useCallback, Fragment } from 'react';
import WeatherContext from '../../../context/weather-context';
import ForecastSpan from "../../common/Forecast/ForecastSpan";
import ForecastScroll from './ForecastScroll';

const Forecast = () => {
    const { weatherData } = useContext(WeatherContext);
    const [forecastData, setForecastData] = useState([]);
    const [isWeekly, setIsWeekly] = useState();

    const forecastSpanChangeHandler = useCallback(newSpan => {
        if (newSpan === 'week') {
            setForecastData(weatherData.daily);
            setIsWeekly(true);
        } else {
            setForecastData(weatherData.hourly.slice(1, 25));
            setIsWeekly(false);
        }
    }, [weatherData]);

    return (
        <Fragment>
            <ForecastSpan onChange={forecastSpanChangeHandler} />
            {forecastData && <ForecastScroll data={forecastData} isWeekly={isWeekly} />}
        </Fragment>
    );
};

export default Forecast;
