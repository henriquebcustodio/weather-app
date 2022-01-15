import ValueAndStatus from "./ValueAndStatus/ValueAndStatus";

const checkStatus = aqi => {
    if (aqi < 50) {
        return {
            text: "Good",
            emojiSymbol: "👍🏻",
            emojiLabel: "thumbs-up-emoji"
        };
    } else if (aqi < 100) {
        return {
            text: "Moderate",
            emojiSymbol: "😐",
            emojiLabel: "neutral-face-emoji"
        };
    } else if (aqi < 200) {
        return {
            text: "Unhealthy",
            emojiSymbol: "👎🏻",
            emojiLabel: "thumbs-down-emoji"
        };
    } else if (aqi < 300) {
        return {
            text: "Very Unhealthy",
            emojiSymbol: "👎🏻",
            emojiLabel: "thumbs-down-emoji"
        };
    }
    return {
        text: "Hazardous",
        emojiSymbol: "🤒",
        emojiLabel: "sick-emoji"
    };

};

const AirQuality = props => {
    const footerData = checkStatus(props.aqi);
    return (
        <ValueAndStatus
            value={props.aqi}
            unit=""
            footerData={footerData}
            pillPercentage={props.aqi / 300}
        />
    );
};

export default AirQuality;