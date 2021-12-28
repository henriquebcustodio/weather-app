import styled from 'styled-components';

const DetailsCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 5rem;

    span {
        margin-top: 0.5rem;
        font-size: 0.9rem;

        &:nth-of-type(2) {
            font-weight: 500;
            font-size: 1rem;
            color: ${props => props.theme.gray}
        }
    }
`;

const DetailsCard = props => {
    return (
        <DetailsCardWrapper>
            {props.icon}
            <span>{props.value}</span>
            <span>{props.description}</span>
        </DetailsCardWrapper>
    );
};

export default DetailsCard;
