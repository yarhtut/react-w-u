import React, {Component} from 'react';

class WeatherMessage extends React.Component {
  render() {
    var {temp, location} = this.props;
    return(
      <div>
        <h2> It's it {temp} in {location}</h2>
      </div>
    );
  }
}

module.exports = WeatherMessage;
