
import MainContext from './mainContext';
import mainReducer from './mainReducer';
import { useReducer } from 'react';

import { Types } from '@root/context/types';
import { MainContextType } from '@root/types/context';

interface Props {
    children: string | JSX.Element | JSX.Element[]
}

const MainState = (props: Props) => {

    const setLocationSource = (locationSource: string):void => {
        dispatch({
            type: Types.SetLocationSource,
            payload: locationSource,
        });
    }

    const setPostcode = (postcode: string): void => {
        dispatch({
            type: Types.SetPostcode,
            payload: postcode,
        });
    }

    const setBusstops = (busStops: Array<Array<string | number>>): void => {
        dispatch({
            type: Types.SetBusstops,
            payload: busStops,
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
        locationSource: "",
        busses: [],
        postcode: '',
        loading: false,
        center: { lat: 51.5072, lng: 0.1276 },
        position: [51.5072, 0.1276],
        busStops: [[]],

        setLocationSource: setLocationSource,
        setPostcode: setPostcode,
        setLoading: setLoading,
        setCenterCoordinates: setCenterCoordinates,
        setPositionCoordinates: setPositionCoordinates,
        setBusstops: setBusstops,

    };

    const [state, dispatch] = useReducer(mainReducer, initialState);


    return (
        <MainContext.Provider
            value={{
                locationSource: state.locationSource,
                busses: state.busses,
                postcode: state.postcode,
                loading: state.loading,
                center: state.center,
                position: state.position,
                busStops: state.busStops,
                setLocationSource,
                setPostcode,
                setLoading,
                setCenterCoordinates,
                setPositionCoordinates,
                setBusstops
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}

export default MainState;
