import styled from 'styled-components';
import HighlightsGrid from '../common/Highlights/HighlightsGrid';

const HighlightsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 600;
    font-size: 1.3rem;
    margin: 1.5rem 0;
`;

const Highlights = () => {
    return (
        <HighlightsWrapper>
            <Title>Today's Highlights</Title>
            <HighlightsGrid />
        </HighlightsWrapper>
    );
};

export default Highlights;
