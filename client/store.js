import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice"
export const store=configureStore({
    // combine differenct Slices
    reducer:{
        //connecting basket slice to global and updates will be done here
        basket: basketReducer
    },
})

