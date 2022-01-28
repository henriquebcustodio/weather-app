import styled from 'styled-components';
import DailyForecast from './DailyForecast';
import WeeklyForecast from './WeeklyForecast';

const Wrapper = styled.section`
    position: relative;
    width: 100%;
`;

const ForecastScroll = props => {
    return (
        <Wrapper>
            {props.isWeekly &&
                <WeeklyForecast
                    data={props.data}
                    isDesktop={props.isDesktop}
                />
            }
            {!props.isWeekly &&
                <DailyForecast
                    data={props.data}
                    isDesktop={props.isDesktop}
                />
            }
        </Wrapper>
    );
};

export default ForecastScroll;
