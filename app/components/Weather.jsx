import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this)
    this.state = {
     isLoading: false
    };
  }

  handleSearch(location){
    var that = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    },function(errorMessage){
      this.setState({isLoading: false});
      alert(errorMessage);
    });
  }

  render() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching weather... </h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return(
      <div>
        <h2> Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}

module.exports = Weather;
