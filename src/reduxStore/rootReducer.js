import { combineReducers } from "redux";
import { coreAreasReducer } from "./reducers/coreAreas.reducer";
import { newsUpdatesReducer } from "./reducers/newsUpdates.reducer";
import { programsReducer } from "./reducers/programs.reducer";

export const rootReducer = combineReducers({
    coreAreas: coreAreasReducer,
    newsUpdates: newsUpdatesReducer,
    programs: programsReducer
})