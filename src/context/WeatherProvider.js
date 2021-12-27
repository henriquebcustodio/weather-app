import { useContext, useEffect, useState } from 'react';
import WeatherContext from './weather-context';
import CityContext from './city-context';
import weatherAPI, { weatherAPIKey } from '../services/weather-api';

const WeatherProvider = props => {
    const [weatherData, setWeatherData] = useState({});
    const [isBusy, setIsBusy] = useState(true);
    const { city, isBusy: cityCtxBusy } = useContext(CityContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await weatherAPI.get('onecall', {
                    params: {
                        lat: city.latitude,
                        lon: city.longitude,
                        exclude: 'minutely',
                        units: 'metric',
                        appid: weatherAPIKey
                    }
                });
                return response.data;
            } catch (err) {
                console.log('An error has ocurred while fetching weather data.', err);
            }
        };

        const updateWeather = async () => {
            setIsBusy(true);
            const data = await fetchData();
            setWeatherData(data);
            setIsBusy(false);
        };


        if (!cityCtxBusy) {
            updateWeather();
        }

        const interval = setInterval(() => {
            if (!cityCtxBusy) {
                updateWeather();
            }
        }, 60000 * 5);

        return () => {
            clearInterval(interval);
        };

    }, [city, cityCtxBusy]);

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