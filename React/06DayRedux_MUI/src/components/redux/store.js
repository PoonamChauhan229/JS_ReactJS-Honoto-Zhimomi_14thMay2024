// import configureStore() API from reduxtoolkit 
// default import XXXX
// empty Redux Store 
// export default 
// configure Store >> object of slices >> named reducer >> object of sliceName


import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice"; // named import

const store=configureStore({
    reducer:{        
        counter:counterSlice
    }
})


export default store

// 2 slices >> n slices 
// userSlice >> Provide to the store
//  faq >> create array of object >> remove repition

// >> context API >> useContext >> Context 
// >> userContext >> Provider >> Consumer

// user
//add name
//remove name
//change name

//cartslice
//additem single
//removeitem single
//clearcart empty


