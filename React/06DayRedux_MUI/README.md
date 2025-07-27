Redux 
Material UI
npm install @mui/material @emotion/react @emotion/styled

index.html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>

.myContainer{
    display: flex; >>
    justify-content: space-between; >>
    align-items: center; >>
    height: 3.3rem;
    margin: 0.4rem;
    border-radius: 0.3rem; >>
    background-color: rgba(0, 0, 0, 0.585); >>
}

Boostrap
d-flex justify-content-between align-items-center bg-dark rounded
brealpoints
sm >> small mobile
md  >> mobile
lg >>tablet 
xl >>laptop
xxl >>deskatops


Redux >>
Material UI >>

BoilerPlate >> Remembering >>Redux ToolKit >> Insatllations

configureStore   >>configureStore()
const store=configureStore({})

createSlice      >>createSlice()
const counterSlice=createSlice()

Slice is a part of Store 
    >> put all the slices in store 
    >> reducer:{
        sliceKey: sliceName >> userdefined   || import it 
    }

GO to REACT
Provide the Store to react (Root compenent)
Provider component >>App.jsx (Root Component)
<Provider store={store}> || prop =propvalue
    <App/>
</Provider>


redux
utilis
store


redux >> 2parts
1 part >> action(app) >> store >>store updated
2 part >> store >> app(value|| state )

counter >>
useState
useReducer

common >> incremet| decrement |reset |times >> see in browser 

1 part 
updating the store and hence not able to c in browser
2 part
update the app and u will c in broswer

PubSub >> Context API  >> Create a Context || Provider || useContext 
Publish || SUbscribe 

Youtube || Media Channels
Publish >> User >> Subscribe 

Redux >> Creating a store(slice>action+reducer) || Provider || useSelector
