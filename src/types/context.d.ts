export interface IMainContext {
    lat: string,
    long: string,
    busses: Array,
    postcode: string,
    loading: boolean,
    get_console_log: () => void,
    setPostcode: (string) => void,
    setLoading: (boolean) => void,
    center: Center,
}

export type Center = {
    lat: number,
    lng: number
}


export type Action = 
    | {type: 'SET_POSTCODE', payload: string} 
    | {type: 'SET_LOADING', payload: boolean}

    

//     lat
// : 
// 51.5591979
// lng
// : 
// -0.0956419