export type MainContextType = {
    lat: string,
    long: string,
    busses: Array,
    postcode: string,
    loading: boolean,
    get_console_log: () => void,
    setPostcode: (postcode: string) => void,
    setLoading: (p: boolean) => void,
    setCenterCoordinates: (p: Center) => void,
    setPositionCoordinates: (p: Center) => void,
    center: Center,
    position: number[]
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

    

//     lat
// : 
// 51.5591979
// lng
// : 
// -0.0956419