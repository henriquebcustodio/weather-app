import axios from 'axios';

const teleportAPI = axios.create({
    baseURL: 'https://api.teleport.org/api/'
});

export default teleportAPI;