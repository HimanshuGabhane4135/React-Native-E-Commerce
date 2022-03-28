import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import CartReducer from "./reducer/CartReducer"


const rootReducer = combineReducers({CartReducer})
export const store=createStore(rootReducer,applyMiddleware(thunk));