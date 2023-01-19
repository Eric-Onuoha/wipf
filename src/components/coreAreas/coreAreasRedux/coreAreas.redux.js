import {useReducer, useEffect} from "react";


const initialState = {
    coreAreas: []
}

const coreAreasTypes = {
    setCoreArea: "coreArea/setCoreArea"
}

const coreAreasReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case coreAreasTypes.setCoreArea:
            return{
                ...state, 
                coreAreas: payload
            };
        default:
            return{
                ...state,
                coreAreas:[]
            }
    }
}

