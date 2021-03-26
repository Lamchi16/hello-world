
import React, { useContext, createContext, useState } from 'react';
import RootNavigation from '../todolist/components/navigations/index'
import Context from "./components/Context"
export default function App() {
  const [context, setContext] = useState([])
  return (
    <Context.Provider value={[context, setContext]}>
      <RootNavigation></RootNavigation>
    </Context.Provider>
  );
}