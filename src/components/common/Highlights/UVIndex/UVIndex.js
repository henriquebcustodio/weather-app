import { useRef } from 'react';
import useOnScreen from '../../../../hooks/useOnScreen';
import styled from 'styled-components';
import ProgressSVG from './ProgressSVG';

const UVIndexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const UVIndex = props => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-75px');

    return (
        <UVIndexWrapper ref={ref}>
            <ProgressSVG
                uvi={props.uvi}
                startAnimation={onScreen}
                percentage={props.uvi * (0.2 / 3)}
            />
        </UVIndexWrapper>
    );
};

export default UVIndex;
