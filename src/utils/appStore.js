import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
//cartReducer is the reducer function extracted from the cartSlice
const appStore = configureStore({
    reducer:{
      cart: cartReducer
    }
});

export default appStore;

