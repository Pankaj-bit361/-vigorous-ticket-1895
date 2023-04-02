import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import{reducer as CartReducer} from "./CartReducer/reducer";
import {reducer as authreducer} from "./authReducer/reducer"
import {reducer as productReducer} from "./productReducer/reducer"
import {reducer as productsReducer} from "./productsRedux/reducer"
import { reducer as adminReducer } from "./AdminReducer/reducer";
import thunk from "redux-thunk"
const allreducers=combineReducers({
authreducer,
productReducer,
CartReducer,
productsReducer,
adminReducer
})


export const store=legacy_createStore(allreducers,applyMiddleware(thunk))