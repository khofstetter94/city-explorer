import React from "react";

class WeatherDay extends React.Component {
  render() {
    let forcast = `${this.props.day.date}: ${this.props.day.description}`;
    return <li>{forcast}</li>
  }
}

export default WeatherDay;
