import { programsTypes } from "../actionTypes";

const initialState = {
    programs: {}
}

export const programsReducer = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch(type){
        case programsTypes.setPrograms:
            return{
                ...state, 
                programs: payload
            };
        default:
            return state;
    }
}