import React from 'react'; /*We need to start by importing 
React, so the rest of the code can be treated a React code 
(or component in this case) and not some other random code*/

/*
See '.light-bulb' at App.css to look what styles
were applied to create the "light bulb".
*/

const LightBulb = (props) =>{

  let classes = "light-bulb";
  if(props.on) classes += " light-bulb-on";

  
  return(
    <div className={classes}>
    </div>
  )
}

export default LightBulb;  /* We need to export the 
component to be able to render it (after importing it) inside the App component
at */