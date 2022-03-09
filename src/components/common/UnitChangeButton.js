import styled from 'styled-components';

const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.7rem;
    width: 2.7rem;
    border-radius: 50%;
    transition: all 0.2s;
    color: ${props => props.active ? "white" : "black"};
    background-color: ${props => {
        if (props.active) {
            return "black";
        }
        return (props.isDesktop ? "white" : props.theme.mainGray);
    }};
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
`;

const UnitChangeButton = props => {

    return (
        <Button
            role="button"
            active={props.isActive}
            onClick={props.onClick}
            isDesktop={props.isDesktop}
        >
            {props.text}
        </Button>
    );
};

export default UnitChangeButton;