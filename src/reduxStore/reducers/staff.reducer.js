import { staffTypes } from "../actionTypes";

const initialState = {
    staff: {}
}

export const staffReducer = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch(type){
        case staffTypes.setStaff:
            return{
                ...state, 
                staff: payload
            };
        default:
            return state;
    }
}