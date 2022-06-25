import React from "react";

class WeatherDay extends React.Component {
  render() {
    let forcast = `${this.props.day.time}: ${this.props.day.forecast}`;
    return <li>{forcast}</li>
  }
}

export default WeatherDay;
