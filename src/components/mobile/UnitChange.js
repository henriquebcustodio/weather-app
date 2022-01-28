import { useContext } from 'react';
import styled from "styled-components";
import Modal from '../UI/Modal/Modal';
import UnitChangeButton from '../common/UnitChangeButton';
import UnitsContext from '../../context/units-context';

const UnitChangeWrapper = styled.menu`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 15rem;
    height: 5rem;
    box-sizing: border-box;
    padding: 0 3rem;
    margin: 0;
`;

const UnitChange = props => {
    const { units, changeUnits } = useContext(UnitsContext);

    const metricClickHandler = () => {
        changeUnits('metric');
        props.onClose();
    };

    const imperialClickHandler = () => {
        changeUnits('imperial');
        props.onClose();
    };

    return (
        <Modal onClose={props.onClose}>
            <UnitChangeWrapper>
                <UnitChangeButton
                    text="°C"
                    isActive={units === 'metric'}
                    onClick={metricClickHandler}
                />
                <UnitChangeButton
                    text="°F"
                    isActive={units === 'imperial'}
                    onClick={imperialClickHandler}
                />
            </UnitChangeWrapper>
        </Modal>
    );
};

export default UnitChange;
