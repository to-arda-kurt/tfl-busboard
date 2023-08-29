export type MainContextType = {
    lat: string,
    long: string,
    busses: Array,
    postcode: string,
    loading: boolean,
    center: Center,
    position: number[],
    setPostcode: (postcode: string) => void,
    setLoading: (p: boolean) => void,
    setCenterCoordinates: (p: Center) => void,
    setPositionCoordinates: (p: Center) => void,
}

export type Center = {
    lat: number,
    lng: number
}


export type Action = 
    | {type: 'SET_POSTCODE', payload: string} 
    | {type: 'SET_LOADING', payload: boolean}
    | {type: 'SET_CENTER', payload: {lat: number; lng: number}}
    | {type: 'SET_POSITION', payload: number[]}

export type RequestType = 
    | {type: 'BUS_STOP'} 
    | {type: 'JOURNEY'}
    | {type: 'ONCOMING_BUSES'}

//     lat
// : 
// 51.5591979
// lng
// : 
// -0.0956419