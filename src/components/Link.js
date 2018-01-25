import React from 'react';

const Link = (props)=>{
    return (
      <div>
        {props.link}     
  
          <button 
          onClick={(e)=>{
            props.handleDeleteLink(props.link);
          }} 
          
          className="btn btn-danger btn-sm">X</button>      
      </div>
    );
  }

  export default Link;