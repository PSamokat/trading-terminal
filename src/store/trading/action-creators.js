import {tradingActionTypes} from './action-types';

export const setTimeStamp = (timeStump) => ({
    type: tradingActionTypes.SET_TIMESTAMP,
    payload: timeStump,
});
export const setInstrument = (instrument) => ({
    type: tradingActionTypes.SET_INSTRUMENT,
    payload: instrument,
});
export const setExchangeRates = (rates) => ({
    type: tradingActionTypes.SET_EXCHANGE_RATES,
    payload: rates,
});