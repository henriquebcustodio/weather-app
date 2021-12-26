import React from 'react';

const CityContext = React.createContext({
    city: {},
    updateCityHandler: () => { }
});

export default CityContext;