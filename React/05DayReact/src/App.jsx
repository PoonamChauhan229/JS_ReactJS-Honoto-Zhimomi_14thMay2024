import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import MainParent01 from './components/PropDrilling/MainParent01'

import ContextMainParent01 from './components/Context/ContextMainParent01'
import CounterUseCallback from './components/Hooks/useCallbackHook/CounterUseCallback'
import TextCounterUseCallback from './components/Hooks/useCallbackHook/TextCounterUseCallback'
import CalculateUseMemo from './components/Hooks/useMemoHook/CalculateUseMemo'
import TaskuseMemoHook from './components/Hooks/useMemoHook/TaskuseMemoHook'
import AccessDomUseRef from './components/Hooks/useRefHook/AccessDomUseRef'
import CounterUseRef from './components/Hooks/useRefHook/CounterUseRef'
import StopWatchUseRef from './components/Hooks/useRefHook/StopWatchUseRef'
import CounteruseReducer from './components/Hooks/useReducerHook/CounteruseReducer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
    
   
  return (
   <>
   {/* PropDrilling */}
   {/* <MainParent01/>  */}
   <hr/>
   <hr/>

    {/* Context */}
   {/* <ContextMainParent01/> */}

   <hr/>
   <hr/>

   {/* <CounterUseCallback/> */}
   <hr/>
   <hr/>

   {/* <TextCounterUseCallback/> */}

    <hr/>
   <hr/>

   {/* <CalculateUseMemo/> */}

  <hr/>
  <hr/>

  {/* <TaskuseMemoHook/>  */}

   <hr/>
  <hr/>

  {/* <AccessDomUseRef/> */}
   <hr/>
   <hr/>
   {/* <CounterUseRef/> */}

  <hr/>
   <hr/>
   {/* <StopWatchUseRef/> */}

   <hr/>
  <hr/>

<CounteruseReducer/>


    <Routes>
      <Route path='/home' element={<Home/>}/>
    </Routes>
   </>
  )
}

export default App