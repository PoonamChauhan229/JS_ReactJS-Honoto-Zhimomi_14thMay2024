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
            console.log("addToCart",action.payload)
            // array >>push
            state.cartVal.push(action.payload) // coming from ur onclick function >> payload -data  addCart(element)//payload
            state.cartNum++
        },
        removeFromCart:()=>{
            // filter logic 
        },
        emptyCart:(state,action)=>{
            state.cartVal=[]
            state.cartNum=0
        }
    }
})
export const {addToCart,removeFromCart,emptyCart}=cartSlice.actions
export default cartSlice.reducer


// userSlice
// add the name,age,email >>
// addUser