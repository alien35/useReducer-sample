import React from 'react';
import MyContext from '../Contexts/StateContext';
import CounterBtns from './CounterBtns.container';

function Counter() {

  
  return (
    <MyContext.Consumer>
      {
        (value) => (
          <div>Count: {value.count}
            <CounterBtns />
          </div>
        )
      }
    </MyContext.Consumer>
  )
}

export default Counter;
