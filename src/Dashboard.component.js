import React from 'react';
import StateContext from './Contexts/StateContext';
import Counter from './Counter/Counter.container';

function Dashboard() {

  return (
    <StateContext.Consumer>
      {
        (value) => (
          <div>
            Dashboard (to see changes propagate here too):
            {value.count}
          </div>
        )
      }
    </StateContext.Consumer>
  )
}

export default Dashboard;
