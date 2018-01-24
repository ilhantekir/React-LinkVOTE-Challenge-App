import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';

class LinkVoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteLinks = this.handleDeleteLinks.bind(this);
    this.handleDeleteLink = this.handleDeleteLink.bind(this);    
    this.handlePick = this.handlePick.bind(this);
    this.handleAddLink = this.handleAddLink.bind(this);
    this.state = {
      links: []
    }
  }

  handleDeleteLinks() {
    this.setState(()=> ({ links: [] }));
  }

  handleDeleteLink(linkToRemove){   
    this.setState((prevState)=>({
      links: prevState.links.filter((link)=> linkToRemove !== link )
    }));
    
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.links.length);
    const link = this.state.links[randomNum];

  }

  handleAddLink(link) {

    if (!link) {
      return 'Enter Valid value to add item'
    }else if (this.state.links.indexOf(link) > -1) {
      return 'This link already exists';
    }

    this.setState((prevState)=>({links: prevState.links.concat([link])}));

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
          handleDeleteLink={this.handleDeleteLink}
        />
      </div>
    );
  }
}


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

const Header = (props)=>{
    return (
      <div>
        <h2>{props.title}</h2>
      </div>
    );  
}

Header.defaultProps = {
  title: 'React'
};



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
    this.setState(()=>({error}));
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

const Links = (props) => {
  return (
    <div>
      <button type="button" onClick={props.handleDeleteLinks} className="btn btn-danger">Remove All</button>
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




ReactDOM.render(<LinkVoteApp />, document.getElementById('app'));