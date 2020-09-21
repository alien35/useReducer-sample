import React from 'react';
import Counter from './Counter/Counter.container';
import Dashboard from './Dashboard.component';

function Home() {

  return (
    <div>
      <div>Home</div>
      <Dashboard />
      <Counter />
    </div>
  )
}

export default Home;
