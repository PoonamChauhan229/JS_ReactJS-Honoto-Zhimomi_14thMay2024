
// counterSLice
// import createSlice() API from reduxtoolkit
// default import XXXXX
// empty Slice
// named export slice >>

// slices are part of your store 

import { createSlice } from "@reduxjs/toolkit";

    const initialState={
            value:0,
            test:""
    }

export const counterSlice=createSlice({
     name:"counter",
     initialState,
    //  collection of action
     reducers:{
                increment:(state,action)=>{
                    // state.value+=1
                    state.value++;
                    state.test="Honoto"
                    // console.log("increment",state.value)
                },
                decrement:(state,action)=>{
                    // state.value-=1
                    state.value-- ;
                    state.test="Poonam" 
                    // console.log("decrement",state.value)
                },
                reset:(state,action)=>{
                    state.value=0
                    // console.log("reset",state.value)
                },
                times:(state,action)=>{
                    state.value*=2;
                    // console.log("times",state.value);
                }
             }
})

export const {increment,decrement,reset,times}=counterSlice.actions
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