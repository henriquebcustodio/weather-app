import axios from 'axios';

const geoDBApi = axios.create({
    baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
    headers: {
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'x-rapidapi-key': '12d718eeb7mshaf734c2b051ba73p1a38f1jsn8a0579f92e60'
    }
});

export default geoDBApi;