import styled from 'styled-components';

const MainSectionWrapper = styled.section`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.backgroundGray};
`;

const MainSection = () => {
    return (
        <MainSectionWrapper>

        </MainSectionWrapper>
    );
};

export default MainSection;