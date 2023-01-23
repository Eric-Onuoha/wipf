import {useReducer, useEffect} from "react";
import { coreAreasTypes } from "../../../reduxStore/actionTypes";

const initialState = {
    coreAreas: []
}

export const coreAreasReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case coreAreasTypes.setCoreArea:
            return{
                ...state, 
                coreAreas: payload
            };
        default:
            return state;
    }
}

