import styled from 'styled-components';
import TopMenu from './TopMenu';

const MainSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 2rem;
    background-color: ${props => props.theme.backgroundGray};
`;

const MainSection = () => {
    return (
        <MainSectionWrapper>
            <TopMenu />
        </MainSectionWrapper>
    );
};

export default MainSection;