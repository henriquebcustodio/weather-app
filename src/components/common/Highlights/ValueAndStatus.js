import styled from 'styled-components';
import ValueDisplay from "./ValueDisplay";
import HighlightFooter from "./HighlightFooter";
import Emoji from "../../../UI/Emoji";

const ValueAndStatusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 1.5rem;
`;

const ValueAndStatus = props => {
    return (
        <ValueAndStatusWrapper>
            <ValueDisplay
                value={props.value}
                unit={props.unit}
            />
            {props.footerData &&
                <HighlightFooter
                    text={props.footerData.text}
                    emoji={<Emoji
                        symbol={props.footerData.emojiSymbol}
                        label={props.footerData.emojiLabel}
                    />}
                />
            }
        </ValueAndStatusWrapper>
    );
};

export default ValueAndStatus;