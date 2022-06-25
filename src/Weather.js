import React from 'react';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    let days = this.props.forcast.map((forcastDay) => <WeatherDay key={forcastDay.time} day={forcastDay} />);
    return <ul>{days}</ul>
  }
}

export default Weather;
