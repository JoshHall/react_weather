import React, { Component } from 'react';
import './index.css';
// import WeatherItem from '../weatherItem';

class WeatherInfo extends Component {
  convertKelvinToFar = num => {
    return ((num - 273.15) * 9/5 + 32).toFixed(1);
  }
  render() {
    return (
        <div className="row">
          <div className="col-md-12">
          {this.props.data.name &&
            <div>
              <h3>City: {this.props.data.name}</h3>
              <h3>Country: {this.props.data.sys.country}</h3>
              <h3>Temperature: {this.convertKelvinToFar(this.props.data.main.temp)}&deg;</h3>
              <h3>Humidity: {this.props.data.main.humidity}%</h3>
              <h3>Description: {this.props.data.weather[0].description}</h3>
            </div>
          }

          {this.props.data.cod === "404" &&
            <h3>Error: {this.props.data.message}</h3>
          }
          </div>
        </div>
    );
  }
}

export default WeatherInfo;
