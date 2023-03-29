import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as authreducer} from "./Authredux/reducer"
import {reducer as productReducer} from "./Productredux/reducer"
import {reducer as cartreducer} from "./CartReducer/reducer"
import thunk from "redux-thunk"
const allreducers=combineReducers({
authreducer,
productReducer,
cartreducer
})


export const store=legacy_createStore(allreducers,applyMiddleware(thunk))