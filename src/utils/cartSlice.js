import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
       items: []
    },
    reducers: {
        addToCart(state, action) {
            //mutating the state over here i.e directly modifying the state
            state.items.push(action.payload);
        },
        removeFromCart(state) {
            state.items.pop();
        },
        clearCart(state) {
            state.items.length = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;