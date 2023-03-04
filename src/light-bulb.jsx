import React from 'react'; /*We need to start by importing 
React, so the rest of the code can be treated a React code 
(or component in this case) and not some other random code*/

/*
See '.light-bulb' at App.css to look what styles
were applied to create the "light bulb".
*/

// destructing syntax can be used to simplify props parameter
// function is called to re-render when props change
const LightBulb = ({on}) =>{

  let classes = "light-bulb";
  // append class when light is on
  if(on) classes = classes + " light-bulb-on";

  
  return(
    <div className={classes}>
    </div>
  )
}

export default LightBulb;  /* We need to export the 
component to be able to render it (after importing it) inside the App component
at */