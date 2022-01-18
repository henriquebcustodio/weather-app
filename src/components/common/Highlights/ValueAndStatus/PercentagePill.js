import { useState, useRef, useEffect } from 'react';
import useOnScreen from '../../../../utils/hooks/useOnScreen';
import styled from 'styled-components';

const Pill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 1.25rem;
    border-radius: 1.25rem;
    padding: 4px;
    border: 2px solid ${props => props.theme.backgroundGray};
`;

const Ball = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${props => props.theme.blue};
    transform: translateY(1.875rem);

    ${props => {
        if (props.animate) return `
            transition: transform 1s ease-out;
            transform: translateY(${props.yTranslation}rem)
        `;
    }}
    
`;

const PercentagePill = props => {
    const ballRef = useRef();
    const onScreen = useOnScreen(ballRef);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (onScreen) {
            setAnimate(true);
        } else {
            setAnimate(false);
        }
    }, [onScreen]);

    const getBallYTranslation = percentage => {
        if (percentage > 1) percentage = 1;
        return -((percentage * 3.75) - 1.875);
    };

    return (
        <Pill>
            <Ball
                ref={ballRef}
                yTranslation={getBallYTranslation(props.percentage)}
                animate={animate}
            />
        </Pill>
    );
};

export default PercentagePill;
