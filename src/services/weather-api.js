import axios from 'axios';

const weatherAPI = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;

export default weatherAPI;