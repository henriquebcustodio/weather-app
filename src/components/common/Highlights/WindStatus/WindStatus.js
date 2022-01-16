import { useContext } from 'react';
import styled from 'styled-components';
import UnitsContext from '../../../../context/units-context';
import WindDirection from './WindDirection';
import ValueDisplay from '../ValueDisplay';

const WindStatusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-top: 1.5rem;
`;

const WindStatus = props => {
    const { unitsToDisplay } = useContext(UnitsContext);

    return (
        <WindStatusWrapper>
            <ValueDisplay value={props.windSpeed} unit={unitsToDisplay.speed} />
            <footer>
                <WindDirection angle={props.windAngle} />
            </footer>
        </WindStatusWrapper>
    );
};

export default WindStatus;
