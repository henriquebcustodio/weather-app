import { useContext } from 'react';
import UnitsContext from '../../../context/units-context';
import ValueAndStatus from "./ValueAndStatus/ValueAndStatus";
import { kmToMiles } from '../../../utils/unit-utils';

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
    const { units, unitsToDisplay } = useContext(UnitsContext);

    const formatVisiblityValue = visibility => {
        if (units === 'metric') {
            return Math.round(visibility / 1000);
        } else {
            return Math.round(kmToMiles(visibility / 1000));
        }
    };

    return (
        <ValueAndStatus
            value={formatVisiblityValue(props.visibility)}
            unit={unitsToDisplay.distance}
            footerData={footerData}
        />
    );
};

export default Visibility;
