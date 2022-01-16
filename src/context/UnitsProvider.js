import { useState, useEffect } from 'react';
import UnitsContext from './units-context';

const metricUnits = {
    speed: 'km/h',
    temperature: '°C',
    distance: 'km'
};

const imperialUnits = {
    speed: 'mph',
    temperature: '°F',
    distance: 'mi'
};

const setLocalStorageUnits = (units, locale) => {
    window.localStorage.setItem('units', units);
    window.localStorage.setItem('locale', locale);
};

const getPreferredUnits = () => {
    const units = window.localStorage.getItem('units');
    if (units) return units;
    return 'metric';
};

const getPreferredLocale = () => {
    const locale = window.localStorage.getItem('locale');
    if (locale) return locale;
    return 'en-uk';
};

const UnitsProvider = props => {
    const preferredUnits = getPreferredUnits();
    const preferredLocale = getPreferredLocale();

    const [units, setUnits] = useState(preferredUnits);
    const [locale, setLocale] = useState(preferredLocale);
    const [unitsToDisplay, setUnitsToDisplay] = useState(metricUnits);

    const unitChangeHandler = units => {
        if (units !== 'metric' && units !== 'imperial') {
            throw new Error(`Could not set units to ${units}.`);
        }
        setUnits(units);
    };

    useEffect(() => {
        if (units === 'metric') {
            setUnitsToDisplay(metricUnits);
            setLocale('en-uk');
            setLocalStorageUnits(units, 'en-uk');
        } else {
            setUnitsToDisplay(imperialUnits);
            setLocale('en-us');
            setLocalStorageUnits(units, 'en-us');
        }
    }, [units]);

    const unitsContext = {
        units,
        changeUnits: unitChangeHandler,
        unitsToDisplay: unitsToDisplay,
        locale
    };

    return (
        <UnitsContext.Provider value={unitsContext}>
            {props.children}
        </UnitsContext.Provider>
    );
};

export default UnitsProvider;
