import styled from 'styled-components';

const HighlightCardWrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 15rem;
    width: 100%;
    box-sizing: border-box;
    border-radius: 1.5rem;
    padding: 1.5rem;
    background-color: white;
    overflow: hidden;
    box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.1);
    ${props => {
        return props.withBorder ? `
            border: 2px solid rgba(${props.theme.mainGrayRGB}, 0.5);
            box-shadow: none;
        `: '';
    }}

    h3 {
        font-weight: 500;
        color: ${props => props.theme.textGray};
        margin: 0;
        margin-bottom: 1rem;
    }
`;

const HighlightCard = props => {
    return (
        <HighlightCardWrapper withBorder={props.withBorder}>
            <h3>{props.title}</h3>
            {props.children}
        </HighlightCardWrapper>
    );
};

export default HighlightCard;
