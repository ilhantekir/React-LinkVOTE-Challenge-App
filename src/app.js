import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';

class LinkVoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteLinks = this.handleDeleteLinks.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      links: ['ilhan tekir', 'lorem']
    }
  }

  handleDeleteLinks() {
    this.setState(() => {
      return {
        links: []
      }
    });
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.links.length);
    const link = this.state.links[randomNum];
    console.log(link);
  }

  render() {

    return (
      <div>
        <Header />
        <Action 
          hasLinks ={this.state.links.length > 0}
          handlePick = {this.handlePick}
        />
        <AddLink />
        <Links
          links={this.state.links}
          handleDeleteLinks = {this.handleDeleteLinks}
          />
      </div>
    );
  }
}

class Action extends React.Component{
  render() {
    return (
      <div>     
      
          <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasLinks}
          className="btn btn-default">What should I do?</button>
              
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

  handleFormSubmit(e) {
    e.preventDefault();
    const link = e.target.elements.link.value.trim();
    if (link) {
      // app.links.push(link);  
      // e.target.elements.link.value = ''; //reset input

      console.log(link);

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
  render() {
   
    return (
      <div>
        <button type="button" onClick={this.props.handleDeleteLinks} className="btn btn-danger">Remove All</button>

        {
          this.props.links.map((link) => <Link key={link} link={link} />) // return <li key={i}>{link}</li>
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