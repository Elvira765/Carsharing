import {combineReducers, createStore} from "redux";
import orderReducer from './order-reducer';

let reducers = combineReducers({
    orderPage: orderReducer
});

let store = createStore(reducers);

window.store = store;

export default store;