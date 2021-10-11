import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cart } from "./CartReducer";

const reducers = combineReducers({ cart })
export const store = createStore(reducers, composeWithDevTools())