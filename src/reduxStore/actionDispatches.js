import { createAction } from "./createAction";
import { coreAreasTypes, mandateTypes, newsUpdatesTypes, programsTypes, aboutWIPFTypes, staffTypes } from "./actionTypes";

export const updateCoreAreas = (coreAreas) => (
    createAction(coreAreasTypes.setCoreAreas,coreAreas)
)

export const addNewsUpdates = (newsUpdates) => (
    createAction(newsUpdatesTypes.setNewsUpdates, newsUpdates)
)

export const addPrograms = (programs) => (
    createAction(programsTypes.setPrograms, programs)
)

export const updateMandate = (mandate) => (
    createAction(mandateTypes.setMandate, mandate)
)

export const updateAboutWIPF = (about) => (
    createAction(aboutWIPFTypes.setAboutWIPF, about)
)

export const addStaff = (staff) => (
    createAction(staffTypes.setStaff, staff)
)