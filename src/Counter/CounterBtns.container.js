import React from 'react';
import DispatchContext from '../Contexts/DispatchContext';

function CounterBtns() {

  const add = (dispatch) => {
    dispatch({type: 'increment'});
  }

  const subtract = (dispatch) => {
    dispatch({type: 'decrement'});
  }

  return (
    <DispatchContext.Consumer>
      {
        (dispatch) => (
          <div>
            <button onClick={() => add(dispatch)}>+</button>
            <button onClick={() => subtract(dispatch)}>-</button>
          </div>
        )
      }
    </DispatchContext.Consumer>
  )
}

export default CounterBtns;
