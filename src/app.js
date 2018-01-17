import React from "react";
import ReactDOM from "react-dom";

// import $ from "jquery";
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;
// import "bootstrap";

// import "./styles/styles.scss";

// console.log($().jquery);


const app = {
    links:[]
}

const onFormSubmit = e => {
  e.preventDefault();  
  const link = e.target.elements.link.value;
  if(link){
    app.links.push(link);  
    e.target.elements.link.value = ''; //reset input
    render();
  }  
};

const onRemoveAll = () => {
    app.links = [];
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div className="container">
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <label htmlFor="linkUrl">Link Url</label>
              <input
                type="text"
                className="form-control"
                id="linkUrl"                
                placeholder="Link Url"
                name="link"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
          <hr />    
         <button type="button" onClick={onRemoveAll} className="btn btn-danger">Remove All</button>
         <hr />          
          {app.links.length}
        </div>
      );
     
      ReactDOM.render(template, appRoot);
};

render();