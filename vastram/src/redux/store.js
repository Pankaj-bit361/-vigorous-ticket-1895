import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as authreducer} from "./Authredux/reducer"
import {reducer as productReducer} from "./Productredux/reducer"
import thunk from "redux-thunk"
const allreducers=combineReducers({
authreducer,
productReducer
})


export const store=legacy_createStore(allreducers,applyMiddleware(thunk))