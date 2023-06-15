import NoteContext from './context/notes/NoteContext';
import './App.css';

import NavBar from './items/NavBar';
import Mainbody from './Mainbody';
import { useReducer } from 'react';
import reducer from './reducers/reducer';


function App() {
  const [state,dispatch] = useReducer(reducer,false)
  return (
    <NoteContext.Provider value={{state,dispatch}}>
      <NavBar />
      <Mainbody/>
    </NoteContext.Provider>
  );
}

export default App;
