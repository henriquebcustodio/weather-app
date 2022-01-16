import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UnitsContext from '../../context/units-context';
import WeatherContext from '../../context/weather-context';
import worldTimeAPI from '../../services/world-time-api';
import { unixToDateTime, getShortTime } from '../../utils/date-utils';

const CurrentTimeWrapper = styled.section`
    display: flex;
    justify-content: center;

    p {
        margin: 0;
        font-weight: 500;
        font-size: 1.3rem;
    }

    span {
        color: ${props => props.theme.gray}
    }
`;

const CurrentTime = props => {
    const { weatherData } = useContext(WeatherContext);
    const { locale } = useContext(UnitsContext);
    const [currentDateTime, setCurrentDateTime] = useState();

    const { onUpdate } = props;

    useEffect(() => {
        let isMounted = true;

        const fetchData = async currentTimezone => {
            try {
                const response = await worldTimeAPI.get(`/timezone/${currentTimezone}`);
                return unixToDateTime(response.data.unixtime, currentTimezone, locale);
            } catch (err) {
                console.log('An error ocurred while fetching the current time.', err);
            }
        };

        const updateDateTime = async () => {
            const dt = await fetchData(weatherData.timezone);
            isMounted && setCurrentDateTime(dt);
            isMounted && onUpdate && onUpdate(dt);
        };

        updateDateTime();

        const interval = setInterval(async () => {
            updateDateTime();
        }, 15000);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [weatherData.timezone, onUpdate, locale]);

    return (
        <CurrentTimeWrapper>
            {currentDateTime &&
                <p>
                    {currentDateTime.weekdayLong},
                    <span> {getShortTime(currentDateTime)}</span>
                </p>
            }
        </CurrentTimeWrapper>
    );
};

export default CurrentTime;
