import styled from 'styled-components';
import Header from '../components/mobile/Header';

const MobileWrapper = styled.section`
    margin: 3rem;
`;

const Mobile = () => {
    return (
        <MobileWrapper>
            <Header />
        </MobileWrapper>
    );
};

export default Mobile;
