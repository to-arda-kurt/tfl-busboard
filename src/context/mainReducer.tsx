/* eslint-disable react-refresh/only-export-components */
import { Types } from '@root/context/types'
import type { Action } from '@root/types/context';


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action: Action) => {
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

        default:
            return state;
    }
};