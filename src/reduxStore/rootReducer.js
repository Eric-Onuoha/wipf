import { combineReducers } from "redux";
import { coreAreasReducer } from "../components/coreAreas/coreAreasReducer/coreAreas.reducer";

export const rootReducer = combineReducers({
    coreAreas: coreAreasReducer
})