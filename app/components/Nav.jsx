import React,{Component} from 'react';
import {Link , IndexLink} from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}> Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}} > About</Link>
        <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Example</Link>
      </div>
    )
  }
};

module.exports = Nav;
