import { useContext, useEffect, useState } from 'react';
import WeatherContext from './weather-context';
import UnitsContext from './units-context';
import CityContext from './city-context';
import weatherAPI, { weatherAPIKey } from '../services/weather-api';
import aqicnAPI from '../services/aqicn-api';

const WeatherProvider = props => {
    const [weatherData, setWeatherData] = useState({});
    const [isBusy, setIsBusy] = useState(true);
    const { city, isBusy: cityCtxBusy } = useContext(CityContext);
    const { units } = useContext(UnitsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const weatherResponse = await weatherAPI.get('onecall', {
                    params: {
                        lat: city.latitude,
                        lon: city.longitude,
                        exclude: 'minutely',
                        units: units,
                        appid: weatherAPIKey
                    }
                });
                const airQualityResponse = await aqicnAPI.get(`feed/geo:${city.latitude};${city.longitude}/`, {
                    params: {
                        token: process.env.REACT_APP_AQICN_API_KEY
                    }
                });
                return { ...weatherResponse.data, aqi: airQualityResponse.data.data.aqi };
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

    }, [units, city, cityCtxBusy]);

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