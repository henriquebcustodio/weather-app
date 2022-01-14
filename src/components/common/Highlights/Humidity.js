import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ValueDisplay from "./ValueDisplay";
import HighlightFooter from "./HighlightFooter";
import Emoji from "../../../UI/Emoji";

const HumidityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 1.5rem;
`;

const Humidity = props => {
    const [footerData, setFooterData] = useState();
    const { humidity } = props;

    useEffect(() => {
        if (humidity >= 70 || humidity < 25) {
            setFooterData({
                text: humidity >= 25 ? "High" : "Low",
                emojiSymbol: "👎",
                emojiLabel: "thumbs-down-emoji"
            });
        }
        if ((humidity >= 60 && humidity < 70) || (humidity >= 25 && humidity < 30)) {
            setFooterData({
                text: "Normal",
                emojiSymbol: "🤙",
                emojiLabel: "shaka-sign-emoji"
            });
        }
        if (humidity >= 30 && humidity < 60) {
            setFooterData({
                text: "Healthy",
                emojiSymbol: "👍",
                emojiLabel: "thumbs-up-emoji"
            });
        }
    }, [humidity]);

    return (
        <HumidityWrapper>
            <ValueDisplay
                value={humidity}
                unit="%"
            />
            {footerData &&
                <HighlightFooter
                    text={footerData.text}
                    emoji={<Emoji
                        symbol={footerData.emojiSymbol}
                        label={footerData.emojiLabel}
                    />}
                />
            }
        </HumidityWrapper>
    );
};


export default Humidity;
