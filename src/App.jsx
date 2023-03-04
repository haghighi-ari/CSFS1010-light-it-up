import React, {useState, useEffect} from 'react';
import './App.css';
import LightBulb from './light-bulb.jsx';
import Switch from './switch.jsx';

// function is called every time React re-renders, when state changes
// this is a component - the main component
function TheApp() {
  // state hook - returns an array with state value & setter
  // parameter of useState is initial/default state - turned off
  // state should always be stored in parent components when children need that state
  const [turnedOn, setTurnedOn] = useState(false);

  // () => {} is an arrow function
  // {} is optional for one line arrow function
  // one line arrow functions return the return value of the first expression
  // wrapping a function is to avoid it calling immediately
  // ! negates the existing value (opposite)
  return (
    <main>
      React⚛️ + Vite⚡ + Replit🌀
      <LightBulb on={turnedOn} /> 
      <Switch toggle={() => { setTurnedOn(!turnedOn); }} />
    </main>
  );
}

// example variables for exporting
let x = 5;
let y = 5;

export default TheApp;

// named export of variables
export { x, y };
