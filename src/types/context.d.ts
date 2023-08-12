export interface IMainContext {
    lat: string,
    long: string,
    busses: Array,
    postcode: string,
    loading:boolean,
    get_console_log: () => void
}


