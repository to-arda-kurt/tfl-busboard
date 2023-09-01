export interface PostcodeInfoData {
    
}

export type PositionType = {
    lat: number,
    long: number,
}



export interface StopPointResponse {
    indicator: string;
    commonName: string;
    naptanId: string;
    lat: number;
    lon: number
}

export interface IOnComingBuses {
    lineName: string;
    timeToStation: number;
    destinationName : string;
    towards : string;
}
