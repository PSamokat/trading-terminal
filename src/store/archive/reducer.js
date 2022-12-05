import {actionTypes} from './action-types';

const defaultState = {
   order: '',
   volume: '',
   archive: [],
};

export default function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.SET_ORDER:
            return {...state, order: action.payload}
        case actionTypes.SET_VOLUME:
            return {...state, volume: action.payload}
        case actionTypes.SET_ARCHIVE:
            return {...state, archive: [...state.archive ,action.payload]}
        default:
            return state
    }
};