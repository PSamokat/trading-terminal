import {actionTypes} from "./action-types";

export const setOrder = (order) => ({
    type: actionTypes.SET_ORDER,
    payload: order,
});
export const setVolume = (volume) => ({
    type: actionTypes.SET_VOLUME,
    payload: volume,
});
export const setArchive = (archive) => ({
    type: actionTypes.SET_ARCHIVE,
    payload: archive,
});