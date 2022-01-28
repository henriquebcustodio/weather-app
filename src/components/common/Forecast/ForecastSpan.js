import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Selector from './Selector';

const ForecastSpanWrapper = styled.menu`
    display: flex;
    margin: 0;
    padding: 0;
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
