/* eslint-disable react-refresh/only-export-components */
import {
    GET_POSTCODE,
    GET_LOCATION,
    GET_BUSES,
    GET_DISRUPTIONS
} from '@root/context/types'


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case GET_POSTCODE:
            return {
                ...state,
                postcode: action.payload,
            };

        default:
            return state;
    }
};