import React from 'react';

// note that toggle is a function passed as a prop from App
const Switch = ({toggle}) =>{


  // className is for the css
  // toggle modifies the parent component state
  // without toggle callback, we cannot parent state
  return(
    <button 
      className="toggle-this"
      onClick={() => toggle()}
      > Toggle Me to turn ON/OFF </button>
  )
}

export default Switch;

/*
We need to define a function for the button
to change the color of the light bulb
and also react needs to "remember" the last
color that the lighbulb has so it can be changed (toggled)
to the opposite the next time the button is used (clicked on)


I think that:
That information that is generated from the Switch component
(Is the ligth currently ON or OFF?),
needs to be passed to the light-bulb component? Please Dave clarify this || UPDATE: This 'info' will be saved as state (using: useState hook), and it should be stored at the highest level so the parent component can pass the state as prop to as many children components as they need to access that info (for example for conditional rendering as in our example) That´s why in this case is stored at App.jsx
*/