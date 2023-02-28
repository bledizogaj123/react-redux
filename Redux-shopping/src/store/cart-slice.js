import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
            addToCart() {},
            removeFromCart() {},
            setShoeCart(state) {
                state.showCart = true;
            },
    }
})