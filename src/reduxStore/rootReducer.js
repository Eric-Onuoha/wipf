import { combineReducers } from "redux";
import {coreAreasReducer} from "";

export const rootReducer = combineReducers({
    coreArea: coreAreasReducer
})