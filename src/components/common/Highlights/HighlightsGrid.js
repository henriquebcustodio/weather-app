import { useContext } from 'react';
import styled from "styled-components";
import HighlightCard from './HighlightCard';
import UVIndex from './UVIndex';
import WeatherContext from '../../../context/weather-context';
import UnitsContext from '../../../context/units-context';
import WindStatus from './WindStatus/WindStatus';
import SunriseAndSunset from './SunriseAndSunset';
import { unixToDateTime, getShortTime } from '../../../utils/date-utils';
import Humidity from './Humidity';
import Visibility from './Visibility';
import AirQuality from './AirQuality';

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
row-gap: 1.5rem;
column-gap: 1.5rem;
width: 100%;

@media screen and (min-width: 38rem) {
    grid-template-columns: repeat(2, 1fr)
}
`;

const HighlightsGrid = () => {
    const { weatherData } = useContext(WeatherContext);
    const { locale } = useContext(UnitsContext);

    const uvi = Math.round(weatherData.current.uvi);
    const windSpeed = weatherData.current.wind_speed;
    const windDirection = weatherData.current.wind_deg;
    const sunrise = getShortTime(unixToDateTime(weatherData.current.sunrise, null, locale));
    const sunset = getShortTime(unixToDateTime(weatherData.current.sunset, null, locale));
    const humidity = weatherData.current.humidity;
    const visibility = weatherData.current.visibility;
    const aqi = weatherData.aqi;

    return (
        <Grid>
            <HighlightCard
                title="UV Index"
                withBorder={true}
            >
                <UVIndex
                    uvi={uvi}
                />
            </HighlightCard>
            <HighlightCard
                title="Wind Status"
                withBorder={true}
            >
                <WindStatus
                    windSpeed={windSpeed}
                    windAngle={windDirection}
                />
            </HighlightCard>
            <HighlightCard
                title="Sunrise & Sunset"
                withBorder={true}
            >
                <SunriseAndSunset
                    sunrise={sunrise}
                    sunset={sunset}
                />
            </HighlightCard>
            <HighlightCard
                title="Humidity"
                withBorder={true}
            >
                <Humidity
                    humidity={humidity}
                />
            </HighlightCard>
            <HighlightCard
                title="Visibility"
                withBorder={true}
            >
                <Visibility
                    visibility={visibility}
                />
            </HighlightCard>
            <HighlightCard
                title="Air Quality"
                withBorder={true}
            >
                <AirQuality
                    aqi={aqi}
                />
            </HighlightCard>
        </Grid>
    );
};

export default HighlightsGrid;