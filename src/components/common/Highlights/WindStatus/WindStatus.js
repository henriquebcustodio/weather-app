import styled from 'styled-components';
import WindDirection from './WindDirection';
import ValueDisplay from '../ValueDisplay';

const WindStatusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-top: 1.5rem;
`;

const WindStatus = props => {
    return (
        <WindStatusWrapper>
            <ValueDisplay value={props.windSpeed} unit="km/h" />
            <WindDirection angle={props.windAngle} />
        </WindStatusWrapper>
    );
};

export default WindStatus;
