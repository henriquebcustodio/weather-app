import styled from 'styled-components';

const HighlightFooterWrapper = styled.footer`
    display: flex;
    font-weight: 500;
    font-size: 1.2rem;
`;

const Text = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
`;

const HighlightFooter = props => {
    return (
        <HighlightFooterWrapper>
            <Text>{props.text}</Text>
            {props.emoji}
        </HighlightFooterWrapper>
    );
};

export default HighlightFooter;
