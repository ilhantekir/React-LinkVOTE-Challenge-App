import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';

class LinkVoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteLinks = this.handleDeleteLinks.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddLink = this.handleAddLink.bind(this);
    this.state = {
      links: []
    }
  }

  handleDeleteLinks() {
    this.setState(() => {
      return {
        links: []
      }
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.links.length);
    const link = this.state.links[randomNum];
    console.log(link);
  }

  handleAddLink(link) {

    if (!link) {
      return 'Enter Valid value to add item'
    }else if (this.state.links.indexOf(link) > -1) {
      return 'This link already exists';
    }

    this.setState((prevState) => {       
      
      return {
        //links: prevState.links.concat([link])  
        links: prevState.links.concat([link])  
      }
    });
  }

  render() {

    return (
      <div>
        <Header />
        <Action
          hasLinks={this.state.links.length > 0}
          handlePick={this.handlePick}
        />
        <AddLink
          handleAddLink={this.handleAddLink}
        />
        <Links
          links={this.state.links}
          handleDeleteLinks={this.handleDeleteLinks}
        />
      </div>
    );
  }
}

class Action extends React.Component {
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

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      error:undefined
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const link = e.target.elements.link.value.trim();
    const error = this.props.handleAddLink(link);

    this.setState(()=>{
      return {error};//es6 shot syntax error:error
    });

     e.target.elements.link.value = ''; //reset input

  }

  render() {
    return (
      <div>
        {this.state.error && <p> {this.state.error} </p>}
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