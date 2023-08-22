
import MainContext from './mainContext';
import mainReducer from './mainReducer';
import { useReducer } from 'react';

import { Types } from '@root/context/types';
import { MainContextType } from '@root/types/context';

interface Props {
    children: string | JSX.Element | JSX.Element[]
}

const MainState = (props: Props) => {
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

    const setCenterCoordinates = (position: { lat: number; lng: number }): void => {
        dispatch({
            type: Types.SetCenter,
            payload: position
        })

        setPositionCoordinates(position);
    }

    const setPositionCoordinates = (position: { lat: number; lng: number }): void => {

        const positionLatLng: number[] = [];
        positionLatLng.push(position.lat);
        positionLatLng.push(position.lng);

        dispatch({
            type: Types.SetPosition,
            payload: positionLatLng
        })
    }

    const initialState: MainContextType = {
        lat: '',
        long: '',
        busses: [],
        postcode: '',
        loading: false,
        center: { lat: 51.505, lng: -0.09 },
        position: [51.505, -0.09],
        setPostcode: setPostcode,
        setLoading: setLoading,
        setCenterCoordinates: setCenterCoordinates,
        setPositionCoordinates: setPositionCoordinates

    };

    const [state, dispatch] = useReducer(mainReducer, initialState);


    return (
        <MainContext.Provider
            value={{
                lat: state.lat,
                long: state.long,
                busses: state.busses,
                postcode: state.postcode,
                loading: state.loading,
                center: state.center,
                position: state.position,
                setPostcode,
                setLoading,
                setCenterCoordinates,
                setPositionCoordinates
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}

export default MainState;
