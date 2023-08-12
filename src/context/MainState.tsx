import { getPostcodeInfo, getNearestPostcode } from '@root/api/postcode'
import MainContext from './mainContext';
import mainReducer from './mainReducer';

import { useReducer } from 'react';

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
    };

    const [state, dispatch] = useReducer(mainReducer, initialState);

    const  get_console_log = () => {
        console.log("CONTEXT")
    }

    return (
        <MainContext.Provider
            value={{

                lat: state.location_lat,
                long: state.location_long,
                busses: state.busses,
                postcode: state.postcode,
                loading: state.loading,
                get_console_log,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}

export default MainState;
