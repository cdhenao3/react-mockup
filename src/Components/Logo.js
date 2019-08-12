import React from 'react';

const Logo = ({logo}) => {
  return ( 
    <div className="logoComponent">
      <img style={{'width':'120px'}} src={logo} alt="Logo"/>
    </div>
   );
}
 
export default Logo;