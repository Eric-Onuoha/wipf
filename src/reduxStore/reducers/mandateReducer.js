import { mandateTypes } from "../actionTypes";

const initialState = {
    mandate: {}
}

export const mandateReducer = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch(type){
        case mandateTypes.setMandate:
            return{
                ...state, 
                mandate: payload
            };
        default:
            return state;
    }
}