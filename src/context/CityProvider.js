import { useState } from 'react';
import CityContext from "./city-context";

const CityProvider = props => {
    const [city, setCity] = useState({
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
    });

    const updateCityHandler = cityData => {
        setCity(cityData);
    };

    const cityContext = {
        city: city,
        updateCity: updateCityHandler,
    };

    return (
        <CityContext.Provider value={cityContext}>
            {props.children}
        </CityContext.Provider>
    );
};

export default CityProvider;
