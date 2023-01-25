import { createAction } from "./createAction";
import { coreAreasTypes } from "./actionTypes";

export const updateCoreAreas = (coreAreas) => (
    createAction(coreAreasTypes.setCoreAreas,coreAreas)
)