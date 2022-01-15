import styled from 'styled-components';

const Pill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 1.25rem;
    border-radius: 1.25rem;
    padding: 4px;
    border: 2px solid ${props => props.theme.backgroundGray};
`;

const Ball = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${props => props.theme.blue};
    transform: ${props => `translateY(${props.yTranslation}rem)`};
`;

const PercentagePill = props => {
    const getBallYTranslation = percentage => {
        if (percentage > 1) percentage = 1;
        return -((percentage * 3.75) - 1.875);
    };

    return (
        <Pill>
            <Ball yTranslation={getBallYTranslation(props.percentage)} />
        </Pill>
    );
};

export default PercentagePill;
