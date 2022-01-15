import ValueAndStatus from "./ValueAndStatus";

//https://www.airthings.com/resources/everything-you-need-to-know-about-humidity
const checkStatus = humidity => {
    if (humidity >= 70 || humidity < 25) {
        return {
            text: humidity >= 25 ? "High" : "Low",
            emojiSymbol: "👎",
            emojiLabel: "thumbs-down-emoji"
        };
    }
    if ((humidity >= 60 && humidity < 70) || (humidity >= 25 && humidity < 30)) {
        return {
            text: "Normal",
            emojiSymbol: "🤙",
            emojiLabel: "shaka-sign-emoji"
        };
    }
    if (humidity >= 30 && humidity < 60) {
        return {
            text: "Healthy",
            emojiSymbol: "👍",
            emojiLabel: "thumbs-up-emoji"
        };
    }
};

const Humidity = props => {
    const footerData = checkStatus(props.humidity);

    return (
        <ValueAndStatus
            value={props.humidity}
            unit="%"
            footerData={footerData}
        />
    );
};

export default Humidity;
