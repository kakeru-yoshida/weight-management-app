import React from 'react';
import './reset.min.css';
import './index.css';
import HeaderMenu from './component/header/header';
import WeightInput from './component/weight-input/weightInput';
import PastWeight from './component/past-weight/pastWeight';
import Graph from './component/graph/graph';

function App() {
  return (
    <div className="App">
      <HeaderMenu/>
      <div className="wrap">
        <Graph/>
        <WeightInput/>
      </div>
      <PastWeight/>
    </div>
  );
}

export default App;