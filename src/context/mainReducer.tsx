/* eslint-disable react-refresh/only-export-components */
import { Types } from '@root/context/types'
import type { Action } from '@root/types/context';
import type { MainContextType } from '@root/types/context'


// eslint-disable-next-line import/no-anonymous-default-export
export default (state : MainContextType, action: Action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};