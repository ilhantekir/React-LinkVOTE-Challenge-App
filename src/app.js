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
  render() {
    return (
      <div>

        add link here

      </div>
    );
  }
}

class Links extends React.Component {
  render() {
    return (
      <div>        
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