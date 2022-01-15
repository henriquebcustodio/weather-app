import { useState, useEffect, useCallback } from 'react';
import CityContext from "./city-context";
import geodbAPI from '../services/geodb-cities';

const CityProvider = props => {
    const [city, setCity] = useState();
    const [isBusy, setIsBusy] = useState(true);

    const fetchData = async coords => {
        const { longitude, latitude } = coords;
        try {
            const response = await geodbAPI.get(`/locations/${latitude}${longitude}/nearbyCities`, {
                params: { radius: '30' }
            });
            return response.data.data;
        } catch (err) {
            console.log('An error ocurred while trying to fetch city data.', err);
        }
    };

    const getGeoLocation = useCallback(() => {
        setIsBusy(true);
        const sanDiego = {
            id: 126373,
            wikiDataId: "Q16552",
            type: "CITY",
            city: "San Diego",
            name: "San Diego",
            country: "United States of America",
            countryCode: "US",
            region: "California",
            regionCode: "CA",
            latitude: 32.715,
            longitude: -117.1625,
            population: 1386932,
        };

        navigator.geolocation.getCurrentPosition(async pos => {
            const nearbyCities = await fetchData(pos.coords);
            setCity(nearbyCities[0]);
            setIsBusy(false);
        }, err => {
            console.log('Could not get geolocation', err);
            setCity(sanDiego);
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
