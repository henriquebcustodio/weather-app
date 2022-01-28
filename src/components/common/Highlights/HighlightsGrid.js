import { Fragment, useContext } from 'react';
import styled from "styled-components";
import HighlightCard from './HighlightCard';
import UVIndex from './UVIndex/UVIndex';
import WeatherContext from '../../../context/weather-context';
import UnitsContext from '../../../context/units-context';
import WindStatus from './WindStatus/WindStatus';
import SunriseAndSunset from './SunriseAndSunset';
import { unixToDateTime, getShortTime } from '../../../utils/date-utils';
import Humidity from './Humidity';
import Visibility from './Visibility';
import AirQuality from './AirQuality';

const MobileGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    column-gap: 1.5rem;
    width: 100%;

    @media screen and (min-width: 38rem) {
        grid-template-columns: repeat(2, 1fr)
    }
`;

const DesktopGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    column-gap: 1.5rem;
    width: 100%;

    @media screen and (min-width: 58rem) {
        grid-template-columns: repeat(2, 1fr)
    }

    @media screen and (min-width: 85rem) {
        grid-template-columns: repeat(3, 1fr)
    }

`;

const HighlightsGrid = props => {
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

    const GridContent = (
        <Fragment>
            <HighlightCard
                title="UV Index"
                withBorder={props.withBorders}
            >
                <UVIndex
                    uvi={uvi}
                />
            </HighlightCard>
            <HighlightCard
                title="Wind Status"
                withBorder={props.withBorders}
            >
                <WindStatus
                    windSpeed={windSpeed}
                    windAngle={windDirection}
                />
            </HighlightCard>
            <HighlightCard
                title="Sunrise & Sunset"
                withBorder={props.withBorders}
            >
                <SunriseAndSunset
                    sunrise={sunrise}
                    sunset={sunset}
                />
            </HighlightCard>
            <HighlightCard
                title="Humidity"
                withBorder={props.withBorders}
            >
                <Humidity
                    humidity={humidity}
                />
            </HighlightCard>
            <HighlightCard
                title="Visibility"
                withBorder={props.withBorders}
            >
                <Visibility
                    visibility={visibility}
                />
            </HighlightCard>
            <HighlightCard
                title="Air Quality"
                withBorder={props.withBorders}
            >
                <AirQuality
                    aqi={aqi}
                />
            </HighlightCard>
        </Fragment>
    );

    return (
        <Fragment>
            {!props.isDesktop &&
                <MobileGrid>
                    {GridContent}
                </MobileGrid>
            }
            {props.isDesktop &&
                <DesktopGrid>
                    {GridContent}
                </DesktopGrid>
            }
        </Fragment>
    );
};

export default HighlightsGrid;