import { createAction } from "./createAction";
import { coreAreasTypes } from "./actionTypes";

//ok
export const updateCoreAreas = (coreAreas) => (
    createAction(coreAreasTypes.setCoreAreas,coreAreas)
)