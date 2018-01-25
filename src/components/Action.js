import React from 'react';

const Action = (props) => {
    return (
      <div>
  
        <button
          onClick={props.handlePick}
          disabled={!props.hasLinks}
          className="btn btn-default">What should I do?</button>
  
      </div>
    );
  }

  export default Action;