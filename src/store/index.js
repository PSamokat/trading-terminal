import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'

import TradingReducer from './trading/reducer';
import ArchiveReducer from './archive/reducer';

const rootReducer = combineReducers({
    trading: TradingReducer,
    archive: ArchiveReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));