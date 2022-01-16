import { useContext } from 'react';
import UnitsContext from '../../../context/units-context';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import styled from 'styled-components';
import WeekForecastItem from '../../common/Forecast/WeekForecastItem';
import DayForeCastItem from '../../common/Forecast/DayForecastItem';
import { unixToDateTime, getShortTime, dateTimeIsNight } from '../../../utils/date-utils';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    width: 100%;
`;

const List = styled.ul`
    list-style: none;
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const ForecastScroll = props => {
    const { locale } = useContext(UnitsContext);

    return (
        <Wrapper>
            <List>
                <ScrollMenu>
                    {props.isWeekly &&
                        props.data.map(day => {
                            const dt = unixToDateTime(day.dt, props.timezone, locale);
                            return (
                                <WeekForecastItem
                                    weekDayShort={dt.weekdayShort}
                                    weatherId={day.weather[0].id}
                                    maxTemp={Math.round(day.temp.max)}
                                    minTemp={Math.round(day.temp.min)}
                                    key={day.dt}
                                    itemId={day.dt}
                                />
                            );
                        })}
                    {!props.isWeekly &&
                        props.data.map(hour => {
                            const dt = unixToDateTime(hour.dt, props.timezone, locale);
                            return (
                                <DayForeCastItem
                                    time={getShortTime(dt)}
                                    weatherId={hour.weather[0].id}
                                    temp={Math.round(hour.temp)}
                                    isNight={dateTimeIsNight(dt)}
                                    key={hour.dt}
                                    itemId={hour.dt}
                                />
                            );
                        })}
                </ScrollMenu>
            </List>
        </Wrapper>
    );
};

export default ForecastScroll;
