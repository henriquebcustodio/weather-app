import styled from 'styled-components';

const SelectorWrapper = styled.a`
    display: flex;
    align-items: top;
    color: ${props => props.theme.textGray};
    margin: 0rem 0.5rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.3rem;
    cursor: pointer;

    span {
        padding-bottom: 2px;
        ${props => props.isActive && `
        color: black;
        border-bottom: 1px solid black;
    `}
    }
`;

const Selector = props => {
    return (
        <SelectorWrapper
            isActive={props.isActive}
            onClick={props.onClick}
            role="button">
            <span>{props.text}</span>
        </SelectorWrapper>
    );
};

export default Selector;
