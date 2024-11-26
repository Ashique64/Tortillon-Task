import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: savedCart,
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.items)); 
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.items)); 
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartTotal = (state) => state.cart.items.length;

