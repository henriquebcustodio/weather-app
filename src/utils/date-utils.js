import { DateTime } from 'luxon';

export const unixToDatetime = (unixTimestamp, timezone) => {
    return DateTime.fromSeconds(unixTimestamp).setZone(timezone).setLocale('en-uk');
};

export const getShortTime = dt => {
    return dt.toLocaleString(DateTime.TIME_SIMPLE);
};