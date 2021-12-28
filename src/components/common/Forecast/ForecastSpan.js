import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Selector from './Selector';

const ForecastSpanWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    margin-top: 1.5rem;
`;

const ForecastSpan = props => {
    const [activeSpan, setActiveSpan] = useState('week');

    const { onChange } = props;

    useEffect(() => {
        onChange && onChange(activeSpan);
    }, [activeSpan, onChange]);

    const todaySelectionHandler = () => {
        setActiveSpan('today');
    };

    const weekSelectionHandler = () => {
        setActiveSpan('week');
    };

    return (
        <ForecastSpanWrapper>
            <Selector
                text="Today"
                isActive={activeSpan === 'today'}
                onClick={todaySelectionHandler}
            />
            <Selector
                text="Week"
                isActive={activeSpan === 'week'}
                onClick={weekSelectionHandler}
            />
        </ForecastSpanWrapper>
    );
};

export default ForecastSpan;
