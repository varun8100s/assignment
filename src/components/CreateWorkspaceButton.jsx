import React from "react";

const Logo = (props) => {
  
  let buttonText = props.stage===4?"Launch Eden":"Create Workspace";
  return (
    
    <input 
    className='submit_button' 
    type="submit" 
    value={buttonText} 
    onClick={
      props.stage===4?
        props.launchEden
      : 
        props.changeStage
      }/>
  );
};

export default Logo;

