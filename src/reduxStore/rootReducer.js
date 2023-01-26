import { combineReducers } from "redux";
import { coreAreasReducer } from "./reducers/coreAreasReducer/coreAreas.reducer";

export const rootReducer = combineReducers({
    coreAreas: coreAreasReducer
})