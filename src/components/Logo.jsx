import React from "react";

const Logo = (props) => {
  let stagePath='/images/stage'+props.stage+'.JPG'
  return (
    <img src='/images/logo.JPG' className='logo'/>
  );
};

export default Logo;

