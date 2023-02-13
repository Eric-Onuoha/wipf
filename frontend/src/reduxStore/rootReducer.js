import { combineReducers } from "redux";
import { coreAreasReducer } from "./reducers/coreAreas.reducer";
import { newsUpdatesReducer } from "./reducers/newsUpdates.reducer";
import { programsReducer } from "./reducers/programs.reducer";
import { mandateReducer } from "./reducers/mandateReducer";
import { aboutWIPFReducer } from "./reducers/aboutWIPF.reducer";
import { staffReducer } from "./reducers/staff.reducer";

export const rootReducer = combineReducers({
    coreAreas: coreAreasReducer,
    newsUpdates: newsUpdatesReducer,
    programs: programsReducer,
    mandate: mandateReducer,
    about: aboutWIPFReducer,
    staff: staffReducer
})