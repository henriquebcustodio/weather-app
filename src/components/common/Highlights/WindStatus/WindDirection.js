import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';

const WindDirectionWrapper = styled.div`
    display: flex;
    align-items: center;

    p {
        font-weight: 500;
        font-size: 1.5rem;
        margin: 0;
        margin-left: 1rem;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;
    padding: 0.3rem;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.backgroundGray};
    color: ${props => props.theme.blue};
    transform-origin: center;
    transform: rotate(${props => props.angle - 180}deg);
`;

const WindDirection = props => {
    return (
        <WindDirectionWrapper>
            <IconWrapper angle={props.angle}>
                <FaMapMarkerAlt size="1.1rem" />
            </IconWrapper>
            <p>{props.angle}°</p>
        </WindDirectionWrapper>

    );
};

export default WindDirection;
