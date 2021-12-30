import styled from 'styled-components';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const SunriseAndSunsetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0;
    width: 100%;
    height: 100%;

    div {
        display: flex;
        align-items: center;
    }
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
    margin-left: 1.5rem;
    font-size: 2.5rem;
`;

const SunriseAndSunset = props => {
    return (
        <SunriseAndSunsetWrapper>
            <div>
                <IconWrapper>
                    <FaArrowUp />
                </IconWrapper>
                <Time>{props.sunrise}</Time>
            </div>
            <div>
                <IconWrapper>
                    <FaArrowDown />
                </IconWrapper>
                <Time>{props.sunset}</Time>
            </div>

        </SunriseAndSunsetWrapper>
    );
};

export default SunriseAndSunset;
