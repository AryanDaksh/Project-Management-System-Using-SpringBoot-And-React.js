import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import {authReducer} from "@/Redux/Auth/Reducer.js";

const rootReducer = combineReducers({
    auth: authReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));