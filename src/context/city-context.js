import React from 'react';

const CityContext = React.createContext({
    city: {},
    updateCity: () => { },
    getCurrentLocation: () => { },
    isBusy: true
});

export default CityContext;