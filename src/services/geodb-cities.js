import axios from 'axios';

const geodbAPI = axios.create({
    baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
    headers: {
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_GEODB_API_KEY
    }
});

export default geodbAPI;