import { coreAreasTypes } from "../actionTypes";

const initialState = {
    coreAreas: {}
}

export const coreAreasReducer = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch(type){
        case coreAreasTypes.setCoreAreas:
            return{
                ...state, 
                coreAreas: payload
            };
        default:
            return state;
    }
}

