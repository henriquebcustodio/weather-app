import { useContext } from 'react';
import styled from 'styled-components';
import UnitsContext from '../../context/units-context';
import UnitChangeButton from '../common/UnitChangeButton';

const UnitChangeWrapper = styled.menu`
    display: flex;
    justify-content: space-between;
    width: 6.5rem;
    margin: 0;
`;

const UnitChange = () => {
    const { units, changeUnits } = useContext(UnitsContext);

    const metricClickHandler = () => {
        changeUnits('metric');
    };

    const imperialClickHandler = () => {
        changeUnits('imperial');
    };
    return (
        <UnitChangeWrapper>
            <UnitChangeButton
                text="°C"
                isActive={units === 'metric'}
                onClick={metricClickHandler}
                isDesktop={true}
            />
            <UnitChangeButton
                text="°F"
                isActive={units === 'imperial'}
                onClick={imperialClickHandler}
                isDesktop={true}
            />
        </UnitChangeWrapper>
    );
};

export default UnitChange;