import { createAction } from "./createAction";
import { coreAreasTypes, newsUpdatesTypes } from "./actionTypes";

export const updateCoreAreas = (coreAreas) => (
    createAction(coreAreasTypes.setCoreAreas,coreAreas)
)

export const addNewsUpdates = (newsUpdates) => (
    createAction(newsUpdatesTypes.setNewsUpdates, newsUpdates)
)