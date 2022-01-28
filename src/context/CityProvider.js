import { useState, useEffect, useCallback } from 'react';
import CityContext from "./city-context";
import teleportAPI from '../services/teleport-api';
import sanFrancisco from '../utils/data/sanFrancisco';

const CityProvider = props => {
    const [city, setCity] = useState();
    const [isBusy, setIsBusy] = useState(true);

    const fetchData = async coords => {
        const { longitude, latitude } = coords;
        try {
            const response = await teleportAPI.get(`/locations/${latitude},${longitude}/`, {
                params: {
                    embed: 'location:nearest-cities/location:nearest-city'
                }
            });
            return response.data._embedded['location:nearest-cities'][0]._embedded['location:nearest-city'];
        } catch (err) {
            console.log('An error ocurred while trying to fetch city data.', err);
        }
    };

    const getGeoLocation = useCallback(() => {
        setIsBusy(true);
        navigator.geolocation.getCurrentPosition(async pos => {
            const nearbyCity = await fetchData(pos.coords);
            setCity(nearbyCity);
            setIsBusy(false);
        }, err => {
            console.log('Could not get geolocation', err);
            setCity(sanFrancisco);
            setIsBusy(false);
        }, {
            enableHighAccuracy: true,
        });
    }, []);

    useEffect(() => {
        getGeoLocation();
    }, [getGeoLocation]);

    const updateCityHandler = cityData => {
        setCity(cityData);
    };

    const cityContext = {
        city: city,
        updateCity: updateCityHandler,
        getCurrentLocation: getGeoLocation,
        isBusy: isBusy
    };

    return (
        <CityContext.Provider value={cityContext}>
            {props.children}
        </CityContext.Provider>
    );
};

export default CityProvider;
