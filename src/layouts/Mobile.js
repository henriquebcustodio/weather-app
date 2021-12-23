import styled from 'styled-components';
import Header from '../components/mobile/Header';

const MobileWrapper = styled.section`
    margin: 2rem;
`;

const Mobile = () => {
    return (
        <MobileWrapper>
            <Header />
        </MobileWrapper>
    );
};

export default Mobile;
