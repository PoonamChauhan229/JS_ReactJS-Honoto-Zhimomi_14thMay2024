
// counterSLice
// import createSlice() API from reduxtoolkit
// default import XXXXX
// empty Slice
// named export slice >>

// slices are part of your store 

import { createSlice } from "@reduxjs/toolkit";

    const initialState={
            value:0
    }

export const counterSlice=createSlice({
     name:"counter",
     initialState,
    //  collection of action
     reducers:{
                increment:()=>{},
                decrement:()=>{},
                reset:()=>{}
             }
})

export const {increment,decrement,reset}=counterSlice.actions
export default counterSlice.reducer


//name
//initialState{}
//reducers{}


//cartSlice >> create the cart Slice  and Provide the store 


// array of object  >> animal title ,animal image ,animal desc
// map >>
// footer >> mui 


// faq >> 

// redux >>
// when i perform an action(click, type) >> we trigger an event (onclick onchange .....)
// click any button >> dispatch an action >> action call function >> reducer function >> RF --> update the state in the store

// click     >> html page 
// dispatch  >> html page
// action    >> slice >> increment || decrement || reset ||
// reducer function >> slice  action >> function(reducer)
// state      >> throughout
// store      >> working with store