
import React from 'react';
import './App.css';
import Headers from './component/Headers/Headers';
import Productgym from './component/Productgym/Productgym';
import QustionComponent from './component/QustionComponent/QustionComponent';

function App() {
  return (
    <div className="App">
<Headers></Headers>
    <Productgym></Productgym>
    <div>
    <div>
    <QustionComponent></QustionComponent>
</div>
</div>
    </div>
  );
}

export default App;
