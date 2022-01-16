import React from 'react';

const UnitsContext = React.createContext({
    units: 'metric',
    changeUnits: () => { },
    unitsToDisplay: {}
});

export default UnitsContext;