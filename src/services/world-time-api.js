import axios from 'axios';

const worldTimeAPI = axios.create({
    baseURL: 'http://worldtimeapi.org/api/'
});

export default worldTimeAPI;