import React from 'react';
const logo = '';

const Logo = ({width}) => {
  width = width === undefined ? 150 : width;
  return ( <img src={logo} width={width} alt="Logo" /> );
}
 
export default Logo;