import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: {
        items: [],
        status: 'loading',
        
    } ,
    category: {
        items: [],
        status: 'loading',
    } ,

};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducer: {},
});

export const productsReducer = productsSlice.reducer;