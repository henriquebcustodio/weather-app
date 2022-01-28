import axios from 'axios';

const worldTimeAPI = axios.create({
    baseURL: 'https://worldtimeapi.org/api/'
});

export default worldTimeAPI;