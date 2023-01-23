import { createAction } from "./createAction";
import { coreAreasTypes } from "./actionTypes";

const updateCoreAreas = (coreArea) => {
    createAction(coreAreasTypes.setCoreArea,coreArea);
}