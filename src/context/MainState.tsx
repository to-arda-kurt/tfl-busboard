
import MainContext from './mainContext';
import mainReducer from './mainReducer';
import { useReducer } from 'react';

import { Types } from '@root/context/types'
import type Center from '@root/types/context'

interface Props {
    children: string | JSX.Element | JSX.Element[]
}

const MainState = (props: Props) => {
    const initialState = {
        location_lat: '',
        location_long: '',
        busses: [],
        postcode: '',
        loading: false,
        center: { lat: 51.505, lng: -0.09 }
    };

    const [state, dispatch] = useReducer(mainReducer, initialState);

    const get_console_log = () => {
        console.log("CONTEXT")
    }

    const setPostcode = (postcode: string): void => {
        dispatch({
            type: Types.SetPostcode,
            payload: postcode,
        });
    }

    const setLoading = (loading: boolean): void => {
        dispatch({
            type: Types.SetLoading,
            payload: loading
        })
    }

    const setCenter = (position: Center): void => {
        dispatch({
            type: Types.SetLoading,
            payload: loading
        })
    }

    return (
        <MainContext.Provider
            value={{
                lat: state.location_lat,
                long: state.location_long,
                busses: state.busses,
                postcode: state.postcode,
                loading: state.loading,
                center: state.center,
                get_console_log,
                setPostcode,
                setLoading,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}

export default MainState;
