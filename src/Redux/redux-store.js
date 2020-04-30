import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    orderPage: orderReducer
});

let store = createStore(reducers);

export default store;