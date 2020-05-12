import {combineReducers, createStore} from "redux";
import orderReducer from './order-reducer';

let reducers = combineReducers({
    orderPage: orderReducer
});

let store = createStore(reducers);

export default store;