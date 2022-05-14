import React from 'react';


const Switch = (props) =>{
/*
We need to define a function for the button
to change the color of the light bulb
and also react needs to "remember" the last
color that the lighbulb has so it can be changed (toggled)
to the opposite the next time the button is used (clicked on)


I think that:
That information that is generated from the Switch component
(Is the ligth currently ON or OFF?),
needs to be passed to the light-bulb component? Please Dave clarify this || UPDATE: This 'info' will be saved as state (using: useState hook)
*/


  return(
    <button 
      className="toggle-this"
      onClick={() => props.toggle()}
      > Toggle Me to turn ON/OFF </button>
  )
}

export default Switch;