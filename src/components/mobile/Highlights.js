import { useContext } from 'react';
import styled from 'styled-components';
import HighlightCard from '../common/Highlights/HighlightCard';
import UVIndex from '../common/Highlights/UVIndex';
import WeatherContext from '../../context/weather-context';
import WindStatus from '../common/Highlights/WindStatus/WindStatus';

const HighlightsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const HighlightsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1.5rem;
    width: 100%;
`;

const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 600;
    font-size: 1.3rem;
    margin: 1.5rem 0;
`;

const Highlights = () => {
    const { weatherData } = useContext(WeatherContext);
    const uvi = Math.round(weatherData.current.uvi);
    const windSpeed = weatherData.current.wind_speed;
    const windDirection = weatherData.current.wind_deg;

    return (
        <HighlightsWrapper>
            <Title>Today's Highlights</Title>
            <HighlightsGrid>
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
            </HighlightsGrid>

        </HighlightsWrapper>
    );
};

export default Highlights;
