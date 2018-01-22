import React from "react";
import ReactDOM from "react-dom";

class LinkVoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteLinks = this.handleDeleteLinks.bind(this);
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

  render() {

    return (
      <div>
        <Header />
        <AddLink />
        <Links
          links={this.state.links}
          handleDeleteLinks = {this.handleDeleteLinks}
          />
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