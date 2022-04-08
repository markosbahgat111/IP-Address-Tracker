import { axios } from 'utils';
import { ILocation } from 'model/location.model';

export const MapApi = async (ipAddress?:string) => {
    try {
        const res = await axios.get(`/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress ? ipAddress : '8.8.8.8'}`)
        const data: ILocation = await res.data;
        return data;
    } catch (error) {
        console.log(error);
    }
};