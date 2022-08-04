import React from "react";

const Header = (props) => {
  let stagePath='/images/stage'+props.stage+'.JPG'
  return (
    <>
      
      
      <img src={stagePath} className='stage'></img>
    </>
  );
};

export default Header;

