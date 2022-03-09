import styled from 'styled-components';

export const ForecastItemCard = styled.div`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
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
                margin: 0.5rem 5px;
                padding: 1rem 1.5rem;
                border-radius: 20px;
                box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.1);

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
            color: ${props => props.theme.textGray};
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