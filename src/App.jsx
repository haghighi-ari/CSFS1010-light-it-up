import React, {useState} from 'react';
import './App.css';
import LightBulb from './light-bulb.jsx';
import Switch from './switch.jsx';

function App() {
  const [turnedOn, setTurnedOn] = useState(true);
  
  return (
    <main>
      React⚛️ + Vite⚡ + Replit🌀
      <LightBulb on={turnedOn} /> 
      <Switch toggle={() => setTurnedOn(!turnedOn)} />
    </main>
  );
}

export default App;
