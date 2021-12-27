import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import WeatherContext from '../../context/weather-context';
import CityContext from '../../context/city-context';
import worldTimeAPI from '../../services/world-time-api';
import { unixToDatetime, getShortTime } from '../../utils/date-utils';

const CurrentDateWrapper = styled.section`
    display: flex;
    justify-content: center;

    p {
        margin: 0;
        font-weight: 500;
        font-size: 1.3rem;
    }

    span {
        color: ${props => props.theme.cardGray}
    }
`;

const CurrentDate = () => {
    const { data: weatherData } = useContext(WeatherContext);
    const { city } = useContext(CityContext);
    const [currentDateTime, setCurrentDateTime] = useState();

    useEffect(() => {
        const fetchData = async currentTimezone => {
            try {
                const response = await worldTimeAPI.get(`/timezone/${currentTimezone}`);
                return unixToDatetime(response.data.unixtime, currentTimezone);
            } catch (err) {
                console.log('An error ocurred while fetching the current time.', err);
            }
        };

        const updateDateTime = async () => {
            const dt = await fetchData(weatherData.timezone);
            setCurrentDateTime(dt);
        };

        updateDateTime();

        const interval = setInterval(async () => {
            updateDateTime();
        }, 15000);

        return () => {
            clearInterval(interval);
        };
    }, [weatherData.timezone, city]);

    return (
        <CurrentDateWrapper>
            {currentDateTime &&
                <p>
                    {currentDateTime.weekdayLong},
                    <span> {getShortTime(currentDateTime)}</span>
                </p>
            }
        </CurrentDateWrapper>
    );
};

export default CurrentDate;
