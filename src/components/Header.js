import React from 'react';

const Header = (props)=>{
    return (
      <div>
        <h2>{props.title}</h2>
      </div>
    );  
}

Header.defaultProps = {
  title: 'React JS'
};


export default Header;