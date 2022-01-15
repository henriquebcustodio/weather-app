import styled from 'styled-components';
import ValueDisplay from "../ValueDisplay";
import HighlightFooter from "../HighlightFooter";
import Emoji from "../../../../UI/Emoji";
import PercentagePill from './PercentagePill';

const ValueAndStatusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-top: 1.5rem;
`;

const ValueWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const ValueAndStatus = props => {
    console.log(props.pillPercentage);
    return (
        <ValueAndStatusWrapper>
            <ValueWrapper>
                <ValueDisplay
                    value={props.value}
                    unit={props.unit}
                />
                {props.pillPercentage ? <PercentagePill percentage={props.pillPercentage} /> : ""}
            </ValueWrapper>
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