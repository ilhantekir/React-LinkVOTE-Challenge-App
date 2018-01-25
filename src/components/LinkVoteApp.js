import React from 'react';
import ReactDOM from "react-dom";

import AddLink from './AddLink';
import Header from './Header';
import Action from './Action';
import Links from './Links';

export default class LinkVoteApp extends React.Component {
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
  
  componentDidMount(){
  
    try{
      const json = localStorage.getItem('links');
      const links = JSON.parse(json);
      if (links) {
        this.setState(()=> ({ links }));
      }  
    } catch (e){
      console.log(e);
    }  
  }
  componentDidUpdate(prevProps,prevState){
    if (prevState.links.length !== this.state.links.length) { 
      const json = JSON.stringify(this.state.links);
      localStorage.setItem('links',json);    
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