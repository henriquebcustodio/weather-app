import styled from 'styled-components';

const SelectorWrapper = styled.p`
    color: ${props => props.theme.headerGray};
    margin: 0rem 0.5rem;
    font-weight: 600;
    font-size: 1.2rem;
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
        <SelectorWrapper isActive={props.isActive} onClick={props.onClick}>
            <span>{props.text}</span>
        </SelectorWrapper>
    );
};

export default Selector;
