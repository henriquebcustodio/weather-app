import React from 'react';

const WeatherContext = React.createContext({
    weatherData: {},
    isBusy: true
});

export default WeatherContext;