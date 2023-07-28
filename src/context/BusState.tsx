import { useReducer } from "react";
import { BusContext } from './BusContext';
import BusReducer from './BusReducer';
import {
    GET_BUSSES
} from "./types";

const BusState = (props) => {
    const initialState = {}

const [state, dispatch] = useReducer(BusReducer, initialState);

//GET BUSSES
const getBusses = (bus) => {
    dispatch({ type: GET_BUSSES, payload: bus });
  };

  return (
    <BusContext.Provider
      value={{
        getBusses: getBusses
      }}
    >
      {props.children}
    </BusContext.Provider>
  );
};

export default BusState;