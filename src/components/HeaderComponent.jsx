import React from 'react';

const HeaderComponent = (props) => {
  return (
      <div className="headerBar">
        <div className="logo">
          <span className="text-white">Gif</span>
          <span className="text-green">Scanner</span>
          <span className="text-white">!</span>
        </div>        
      </div>
  );      
}

export default HeaderComponent;