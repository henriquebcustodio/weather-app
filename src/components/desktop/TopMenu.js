import styled from 'styled-components';
import ForecastSpan from '../common/Forecast/ForecastSpan';
import UnitChange from './UnitChange';

const TopMenuWrapper = styled.header`
    display: flex;
    padding: 0 5px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const TopMenu = props => {
    const forecastSpanChangeHandler = newSpan => {
        newSpan === 'week' ? props.onForecastSpanChange(true) : props.onForecastSpanChange(false);
    };

    return (
        <TopMenuWrapper>
            <ForecastSpan
                onChange={forecastSpanChangeHandler}
            />
            <UnitChange />
        </TopMenuWrapper>
    );
};

export default TopMenu;