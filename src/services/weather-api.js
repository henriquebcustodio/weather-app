import axios from 'axios';

const weatherAPI = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const weatherAPIKey = '2d4d65e8740002073865867d3f090084';

export default weatherAPI;