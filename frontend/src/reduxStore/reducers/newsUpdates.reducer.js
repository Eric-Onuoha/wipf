import { newsUpdatesTypes } from "../actionTypes";

const initialState = {
    newsUpdates: {}
}

export const newsUpdatesReducer = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch(type){
        case newsUpdatesTypes.setNewsUpdates:
            return{
                ...state, 
                newsUpdates: payload
            };
        default:
            return state;
    }
}