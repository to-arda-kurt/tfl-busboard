/* eslint-disable react-refresh/only-export-components */
import {
    GET_BUSSES
  } from "./types";
  
export default (state, action) => {
    switch (action.type) {
      case GET_BUSSES:
        return {
          ...state,
        };

      default:
        return state;
    }
  };