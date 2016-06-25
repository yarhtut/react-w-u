import React, {Component} from 'react';
import  Nav from 'Nav';

class Main extends React.Component{
  render() {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
};

module.exports = Main;
