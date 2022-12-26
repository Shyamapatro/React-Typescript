import React, { createContext, useReducer } from 'react';
import './App.css';
import { intialState, reducer, actionType } from './useReduce';
import User from './Components/User';
import Profile from './Components/Profile';
import Profile2 from './Components/Profile2';
import Profile3 from './Components/Profile3';
// import Todo from './Components/Todo';
// import Todo1 from './Components/Todo1';

type contextType = {
  state: typeof intialState,
  dispatch: React.Dispatch<actionType>
}
export const userContext = createContext({} as contextType)


function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <userContext.Provider value={{ state, dispatch }}>
      <div className='App m-5 bg-slate-600 p-5 shadow-lg grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1'>
        <Profile name="Shyama" />
        <Profile2 name="Raja" age={24} />
        <Profile3 name="Shiva" age={25} address={"Jamshedpur"} status={"single"} />
        <Profile3 name="Suresh" age={22} >
          <span className=""> 5CTC</span>
        </Profile3>
        {/* <Todo />
        <Todo1 /> */}
        {/* <User /> */}
      </div>
    </userContext.Provider>
  );
}

export default App;
