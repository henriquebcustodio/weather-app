import styled from "styled-components";

const EmojiWrapper = styled.span`
`;

const Emoji = props => {
    return (
        <EmojiWrapper
            role="img"
            aria-label={props.label}
        >
            {props.symbol}
        </EmojiWrapper>
    );
};

export default Emoji;
