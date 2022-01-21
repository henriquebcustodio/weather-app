import styled from 'styled-components';
import MainSection from '../components/desktop/MainSection';
import SideBar from '../components/desktop/SideBar';

const DesktopWrapper = styled.main`
    display: flex;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
`;

const Desktop = () => {
    return (
        <DesktopWrapper>
            <SideBar />
            <MainSection />
        </DesktopWrapper>
    );
};

export default Desktop;
