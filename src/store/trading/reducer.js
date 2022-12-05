import {tradingActionTypes} from "./action-types";

const defaultState = {
    timeStamp: '',
    selectedInstrument: {},
    exchangeRates: {},
}

export default function reducer (state = defaultState, action) {
    switch (action.type) {
        case tradingActionTypes.SET_TIMESTAMP:
            return {...state, timeStamp: action.payload}
        case tradingActionTypes.SET_INSTRUMENT:
            return {...state, selectedInstrument: action.payload}
        case tradingActionTypes.SET_EXCHANGE_RATES:
            return {...state, exchangeRates: action.payload}
        default:
            return state
    }
};