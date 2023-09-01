export interface PostcodeInfoData {
    
}

export type PositionType = {
    lat: number,
    long: number,
}



interface StopPointResponse {
    indicator: string;
    commonName: string;
    naptanId: string;
    lat: number;
    lon: number
}
