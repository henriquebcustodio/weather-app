import { useState } from 'react';
import styled from 'styled-components';
import Forecast from './Forecast';
import Highlights from './Highlights';
import TopMenu from './TopMenu';

const MainSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
    background-color: ${props => props.theme.backgroundGray};
    overflow-x: hidden;
    overflow-y: auto;
`;

const MainSection = () => {
    const [isWeeklyForecast, setIsWeeklyForecast] = useState(true);

    const isWeeklyHandler = isWeekly => {
        setIsWeeklyForecast(isWeekly);
    };

    return (
        <MainSectionWrapper>
            <TopMenu
                onForecastSpanChange={isWeeklyHandler}
            />
            <Forecast
                isWeekly={isWeeklyForecast}
            />
            <Highlights />
        </MainSectionWrapper>
    );
};

export default MainSection;