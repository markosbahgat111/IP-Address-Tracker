import axios from 'axios';


const instance = axios.create({
    baseURL: "https://geo.ipify.org/api/v2",
    timeout:5000
})

export default instance;