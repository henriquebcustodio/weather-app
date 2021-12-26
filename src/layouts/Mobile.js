import styled from 'styled-components';
import CityName from '../components/common/CityName';
import Header from '../components/mobile/Header';

const MobileWrapper = styled.section`
    margin: 2rem;
`;

const Mobile = () => {
    return (
        <MobileWrapper>
            <Header />
            <CityName />
        </MobileWrapper>
    );
};

export default Mobile;
