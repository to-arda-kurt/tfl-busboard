/* eslint-disable react-refresh/only-export-components */
import { Types } from '@root/context/types'
import type { Action } from '@root/types/context';
import type { MainContextType } from '@root/types/context'


const mainReducer = (state: MainContextType, action: Action) => {
    switch (action.type) {
        case Types.SetLocationSource:
            return {
                ...state,
                locationSource: action.payload,
            };
        case Types.SetPostcode:
            return {
                ...state,
                postcode: action.payload,
            };

        case Types.SetLoading:
            return {
                ...state,
                loading: action.payload,
            };

        case Types.SetCenter:
            return {
                ...state,
                center: action.payload,
            };

        case Types.SetPosition:
            return {
                ...state,
                position: action.payload,
            };

        case Types.SetBusstops:
            return {
                ...state,
                busStops: action.payload,
            };
        default:
            return state;
    }
};

export default mainReducer;