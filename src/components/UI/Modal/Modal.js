import { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalBackdrop from './ModalBackdrop';
import ModalOverlay from './ModalOverlay';

const portalElement = document.getElementById('overlays');

const Modal = props => {
    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'none';
        };
    }, []);

    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalBackdrop onClick={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;
