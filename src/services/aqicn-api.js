import axios from 'axios';

const aqicnAPI = axios.create({
    baseURL: "https://api.waqi.info/",
});

export default aqicnAPI;