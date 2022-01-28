import styled from 'styled-components';

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 120%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
`;

const ModalBackdrop = props => {
    return (
        <Backdrop onClick={props.onClick} />
    );
};

export default ModalBackdrop;
