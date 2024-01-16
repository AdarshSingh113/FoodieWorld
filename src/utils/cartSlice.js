import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "Adarsh",
    initialState : {
      items : []
    },
    //Mutating the State
    reducers : {
        addItem : (state , action) =>{
            console.log(current(state));
            state.items.push(action.payload)
        },
        removeItem : (state) =>{
            state.items.pop();           
        },
        clearCart : (state) =>{
            state.items.length=0;//state = [];
        }
    }
});

export const{addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;