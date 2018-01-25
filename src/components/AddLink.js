import React from 'react';

export default class AddLink extends React.Component {

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
      if (!error) {
        e.target.elements.link.value = ''; //reset input
      }
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