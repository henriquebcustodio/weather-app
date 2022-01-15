import ValueAndStatus from "./ValueAndStatus/ValueAndStatus";

//https://rpg.stackexchange.com/questions/6610/a-summary-of-visibility
const checkStatus = visibility => {
    if (visibility < 3704) {
        return {
            text: "Poor",
            emojiSymbol: "👎🏻",
            emojiLabel: "thumbs-down-emoji"
        };
    }
    if (visibility >= 3704 && visibility < 9260) {
        return {
            text: "Moderate",
            emojiSymbol: "😐",
            emojiLabel: "neutral-face-emoji"
        };
    }
    return {
        text: "Good",
        emojiSymbol: "👍🏻",
        emojiLabel: "thumbs-up-emoji"
    };
};

const Visibility = props => {
    const footerData = checkStatus(props.visibility);

    return (
        <ValueAndStatus
            value={Math.round(props.visibility / 1000)}
            unit="km"
            footerData={footerData}
        />
    );
};

export default Visibility;
