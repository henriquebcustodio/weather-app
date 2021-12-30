import styled from 'styled-components';

const ValueDisplayWrapper = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 1rem;

    span {
        font-size: 3.5rem;
        margin-right: 5px;
    }
`;

const ValueDisplay = props => {
    return (
        <ValueDisplayWrapper>
            <span>{props.value}</span>
            {props.unit}
        </ValueDisplayWrapper>
    );
};

export default ValueDisplay;
