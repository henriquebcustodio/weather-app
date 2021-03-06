import styled from 'styled-components';

const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #FFF;
    border-radius: 10px;
    z-index: 30;
    animation: slide-up 250ms ease-out;

    @keyframes slide-up {
        from {
            transform: translate(-50%, 2rem);
        }

        to {
            transform: translate(-50%, -50%);
        }
    }
`;

const Title = styled.h3`
    font-weight: 600;
`;

const ModalOverlay = props => {
    return (
        <Overlay>
            <Title>Change Units</Title>
            {props.children}
        </Overlay>
    );
};

export default ModalOverlay;
