import React, { Component } from 'react';
import './App.css';
import StateContext from './Contexts/StateContext';
import Home from './Home';
import DispatchContext from './Contexts/DispatchContext';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function App() {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <Home />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
