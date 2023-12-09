import React from 'react';
import './reset.min.css';
import HeaderMenu from './component/header/header';
import WeightInput from './component/weight-input/weightInput';
import PastWeight from './component/past-weight/pastWeight';

function App() {
  return (
    <div className="App">
      <HeaderMenu/>
      <WeightInput/>
      <PastWeight/>
    </div>
  );
}

export default App;