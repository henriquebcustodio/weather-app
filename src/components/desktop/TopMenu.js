import styled from 'styled-components';
import ForecastSpan from '../common/Forecast/ForecastSpan';
import UnitChange from './UnitChange';

const TopMenuWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const TopMenu = () => {
    return (
        <TopMenuWrapper>
            <ForecastSpan />
            <UnitChange />
        </TopMenuWrapper>
    );
};

export default TopMenu;