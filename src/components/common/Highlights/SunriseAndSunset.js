import styled from 'styled-components';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const SunriseAndSunsetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 20rem;
    height: 100%;
    white-space: nowrap;
`;

const DataWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 3rem;
    min-width: 3rem;
    border-radius: 50%;
    background: radial-gradient(#FFDE4A, #FFBE5E);
    color: white;
`;

const Time = styled.p`
    margin: 0;
    margin-left: 2rem;
    font-size: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const SunriseAndSunset = props => {
    return (
        <SunriseAndSunsetWrapper>
            <DataWrapper>
                <IconWrapper>
                    <FaArrowUp />
                </IconWrapper>
                <Time>{props.sunrise}</Time>
            </DataWrapper>
            <DataWrapper>
                <IconWrapper>
                    <FaArrowDown />
                </IconWrapper>
                <Time>{props.sunset}</Time>
            </DataWrapper>

        </SunriseAndSunsetWrapper>
    );
};

export default SunriseAndSunset;
