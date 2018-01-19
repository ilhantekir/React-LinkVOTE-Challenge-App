import React from "react";
import ReactDOM from "react-dom";

class LinkVoteApp extends React.Component {
  render() {

    const app = {
      links:['dfds','sdgs']
  }
    return (
      <div>
        <Header />
        <AddLink />
        <Links links={app.links}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        Header
      </div>
    );
  }
}

class AddLink extends React.Component {

  handleFormSubmit(e){
    e.preventDefault();  
    const link = e.target.elements.link.value.trim();
    if(link){
      app.links.push(link);  
      e.target.elements.link.value = ''; //reset input
     
    }  
  }

  render() {
    return (
      <div>

          <form onSubmit={this.handleFormSubmit}>
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

      </div>
    );
  }
}

class Links extends React.Component {
  handleRemoveAll(){
    console.log(this.props);
  }
  render() { 
    return (
      <div>   
      <button type="button" onClick={this.handleRemoveAll} className="btn btn-danger">Remove All</button>
             
          {
            this.props.links.map((link, i) => <Link key={i} link={link} />) // return <li key={i}>{link}</li>
          }       
      </div>
    );
  }
}


class Link extends React.Component {
  render() {
    return (
      <div>           
            {this.props.link}
      </div>
    );
  }
}


ReactDOM.render(<LinkVoteApp />, document.getElementById('app'));