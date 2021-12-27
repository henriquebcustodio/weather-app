import { DateTime } from 'luxon';

export const unixToDateTime = (unixTimestamp, timezone) => {
    return DateTime.fromSeconds(unixTimestamp).setZone(timezone).setLocale('en-uk');
};

export const getShortTime = dt => {
    return dt.toLocaleString(DateTime.TIME_SIMPLE);
};

export const dateTimeIsNight = (dt) => {
    if (dt.hour >= 18 || dt.hour < 6) {
        return true;
    }
    return false;
};