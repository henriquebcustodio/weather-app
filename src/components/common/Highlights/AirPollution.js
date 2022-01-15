import ValueAndStatus from "./ValueAndStatus";

const checkStatus = aqi => {
    if (aqi <= 2) {
        return {
            text: aqi = 1 ? "Very Low" : "Low",
            emojiSymbol: "👍🏻",
            emojiLabel: "thumbs-up-emoji"
        };
    }
    if (aqi === 3) {
        return {
            text: "Moderate",
            emojiSymbol: "😐",
            emojiLabel: "neutral-face-emoji"
        };
    }
    return {
        text: aqi = 4 ? "High" : "Very High",
        emojiSymbol: "👎🏻",
        emojiLabel: "thumbs-down-emoji"
    };
};

const AirPollution = props => {
    const footerData = checkStatus(props.aqi);
    return (
        <ValueAndStatus
            value={props.aqi}
            unit=""
            footerData={footerData}
        />
    );
};

export default AirPollution;