import { useContext, useEffect, useState } from 'react';
import WeatherContext from './weather-context';
import CityContext from './city-context';
import weatherAPI, { weatherAPIKey } from '../services/weather-api';

const WeatherProvider = props => {
    const [weatherData, setWeatherData] = useState({});
    const [isBusy, setIsBusy] = useState(false);
    const cityCtx = useContext(CityContext);
    const { city } = cityCtx;

    useEffect(() => {
        const fetchData = async () => {
            setIsBusy(true);
            try {
                const response = await weatherAPI.get('onecall', {
                    params: {
                        lat: city.latitude,
                        lon: city.longitude,
                        exclude: 'minutely',
                        appid: weatherAPIKey
                    }
                });
                setWeatherData(response.data);
            } catch (err) {
                console.log('An error has ocurred while fetching weather data.', err);
            }
            setIsBusy(false);
        };
        fetchData();
    }, [city]);

    const weatherContext = {
        weatherData: weatherData,
        isBusy: isBusy,
    };

    return (
        <WeatherContext.Provider value={weatherContext} >
            {props.children}
        </WeatherContext.Provider>
    );

};

export default WeatherProvider;