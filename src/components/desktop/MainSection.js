import { useState } from 'react';
import styled from 'styled-components';
import Forecast from './Forecast';
import TopMenu from './TopMenu';

const MainSectionWrapper = styled.section`
    height: 100%;
    width: 100%;
    padding: 2rem;
    background-color: ${props => props.theme.backgroundGray};
    overflow-x: hidden;
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
        </MainSectionWrapper>
    );
};

export default MainSection;