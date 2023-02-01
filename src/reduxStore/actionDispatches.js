import { createAction } from "./createAction";
import { coreAreasTypes, newsUpdatesTypes, programsTypes } from "./actionTypes";

export const updateCoreAreas = (coreAreas) => (
    createAction(coreAreasTypes.setCoreAreas,coreAreas)
)

export const addNewsUpdates = (newsUpdates) => (
    createAction(newsUpdatesTypes.setNewsUpdates, newsUpdates)
)

export const addPrograms = (programs) => (
    createAction(programsTypes.setPrograms, programs)
)