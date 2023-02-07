import { combineReducers } from "redux";
import { coreAreasReducer } from "./reducers/coreAreas.reducer";
import { newsUpdatesReducer } from "./reducers/newsUpdates.reducer";
import { programsReducer } from "./reducers/programs.reducer";
import { mandateReducer } from "./reducers/mandateReducer";

export const rootReducer = combineReducers({
    coreAreas: coreAreasReducer,
    newsUpdates: newsUpdatesReducer,
    programs: programsReducer,
    mandate: mandateReducer
})