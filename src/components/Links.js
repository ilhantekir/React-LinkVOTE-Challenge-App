import React from 'react';
import Link from './Link';
const Links = (props) => {
    return (
      <div>
        <button type="button" onClick={props.handleDeleteLinks} className="btn btn-danger">Remove All</button>
        {props.links.length === 0 && <p>Please add a link</p>}
        {
          props.links.map((link) => (
            <Link 
            key={link}
            link={link} 
            handleDeleteLink = {props.handleDeleteLink}/>
          )) 
        }
      </div>
    );
  }
  
  export default Links;
