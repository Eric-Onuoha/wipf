import { aboutWIPFTypes } from "../actionTypes";

const initialState = {
    about: {}
}

export const aboutWIPFReducer = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch(type){
        case aboutWIPFTypes.setAboutWIPF:
            return{
                ...state, 
                about: payload
            };
        default:
            return state;
    }
}