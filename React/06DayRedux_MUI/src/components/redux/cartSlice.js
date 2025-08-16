import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartVal:[],// let us see why need array ?
    cartNum:0
}

// cart Functionality
// addToCart
// removeFromCart
// emptyCart
export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            // array >>push
            state.cartVal.push(action.payload) // coming from ur onclick function >> payload -data
            state.cartNum++
        },
        removeFromCart:()=>{},
        emptyCart:()=>{}
    }
})
export const {addToCart,removeFromCart,emptyCart}=cartSlice.actions
export default cartSlice.reducer