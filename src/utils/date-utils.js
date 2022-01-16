import { DateTime } from 'luxon';

export const unixToDateTime = (unixTimestamp, timezone) => {
    return DateTime.fromSeconds(unixTimestamp).setZone(timezone);
};

export const getShortTime = (dt, locale) => {
    return dt.setLocale(locale).toLocaleString(DateTime.TIME_SIMPLE);
};

export const dateTimeIsNight = (dt) => {
    if (dt.hour >= 18 || dt.hour < 6) {
        return true;
    }
    return false;
};