export interface PostcodeInfoData {
    latitude: number;
    longitude: number;
}

export type PositionType = {
    lat: number,
    lng: number,
}

export interface StopPointResponse {
    indicator: string;
    commonName: string;
    naptanId: string;
    lat: number;
    lon: number;
    stopLetter:string;
}

export interface IOnComingBuses {
    lineName: string;
    timeToStation: number;
    destinationName : string;
    towards : string;
}
