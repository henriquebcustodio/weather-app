import { useContext } from 'react';
import styled from 'styled-components';
import HighlightCard from '../common/Highlights/HighlightCard';
import UVIndex from '../common/Highlights/UVIndex';
import WeatherContext from '../../context/weather-context';

const HighlightsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
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

    return (
        <HighlightsWrapper>
            <Title>Today's Highlights</Title>
            <HighlightCard title="UV Index" withBorder={true}>
                <UVIndex uvi={uvi} />
            </HighlightCard>
        </HighlightsWrapper>
    );
};

export default Highlights;
