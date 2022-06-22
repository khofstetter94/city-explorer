import React from 'react';

class Weather extends React.Component {
  render() {
    let days = this.props.forcast.map(day => {
      let forcast = `${day.date}: ${day.description}`;
      return <li key={day.date}>{forcast}</li>
    });

    return <ul>{days}</ul>
  }
}

export default Weather;
