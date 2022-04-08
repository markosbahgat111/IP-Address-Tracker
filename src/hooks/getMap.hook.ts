import { useState } from 'react';
import { MapApi } from "api/map.api";
import { ILocation } from '../model/location.model';

const useIpTracker = () => {
    const [data, setData] = useState<ILocation | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const getLocation = async (ipAddress?:string) => {
            try {
                const res = await MapApi(ipAddress);
                setData(res ? res : null)
                console.log(res);
                return res;
            }
            catch (error: any) {
                setError(error);
                console.log(error)
            }

    }
    return {
        data,
        error,
        getLocation
    }
}

export default useIpTracker;