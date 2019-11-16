import React from 'react';

const HeaderComponent = (props) => {
  return (
      <div className="headerBar">
        <div className="logo">
          <span className="text-white">Pop</span>
          <span className="text-green">Gifs</span>
          <span className="text-white">!</span>
        </div>        
      </div>
  );      
}

export default HeaderComponent;