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

