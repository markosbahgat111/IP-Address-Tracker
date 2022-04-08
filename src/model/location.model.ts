export interface ILocation {
    ip: string,
    isp:string,
    location: {
        city: string,
        country: string,
        geonameId: number,
        lat: number,
        lng: number,
        region: string,
        timezone:string
    }
}