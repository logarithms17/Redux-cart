import { combineReducers, configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import cartReducer from './cartSlice'

export const store = configureStore({
    reducer: combineReducers({
        ui: uiReducer,
        cart: cartReducer
    })
})

export default store

