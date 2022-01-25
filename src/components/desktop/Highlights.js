import styled from 'styled-components';
import HighlightsGrid from '../common/Highlights/HighlightsGrid';

const HighlightsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 69rem;
`;

const Title = styled.h2`
    font-weight: 600;
    font-size: 1.3rem;
    margin: 0;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
`;

const Highlights = () => {
    return (
        <HighlightsWrapper>
            <Title>Today's Highlights</Title>
            <HighlightsGrid
                isDesktop={true}
                withBorders={false}
            />
        </HighlightsWrapper>
    );
};

export default Highlights;
