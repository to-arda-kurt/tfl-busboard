export type MainContextType = {
    busses: Array,
    postcode: string,
    loading: boolean,
    center: Center,
    position: number[],
    busStops: Array<Array<string | number>>,
    setPostcode: (postcode: string) => void,
    setLoading: (p: boolean) => void,
    setCenterCoordinates: (p: Center) => void,
    setPositionCoordinates: (p: Center) => void,
    setBusstops: (p: Array<Array<string | number>>) => void;
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
    | {type: 'SET_BUSSTOPS', payload: Array<Array<string | number>>}

    

//     lat
// : 
// 51.5591979
// lng
// : 
// -0.0956419