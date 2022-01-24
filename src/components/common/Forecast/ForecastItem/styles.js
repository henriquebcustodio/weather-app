import styled from 'styled-components';

export const ForecastItemCard = styled.div`
    margin: 0 0.8rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 5rem;
    font-weight: 500;

    ${props => {
        if (props.isDesktop) {
            return `
                background-color: white;
                margin: 0 5px;
                padding: 1rem 1.5rem;
                border-radius: 20px;
            `;
        }
    }}
`;

export const TemperatureWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        margin: 0 4px;
        :nth-of-type(2) {
            color: ${props => props.theme.gray};
        }
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 100%;
    margin: 1rem 0;
`;