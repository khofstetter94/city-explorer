import React from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      cityResults: []
    };
  }

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let cities =  await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    this.setState({
      cityResults: cities.data
    })
  }

  render(){
    let cityList = this.state.cityResults.map((city, idx) => {
      return <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      key={idx}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{city.display_name}</div>
        Latitude: {city.lat}  Longitude: {city.lon}
      </div>
      <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${city.lat},${city.lon}&zoom=12`} alt="map of city"/>
    </ListGroup.Item>
    })
    return (
      <>
        <h1>Find a City!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onInput={this.handleCityInput}></input>
          <button type="submit">Explore!</button>
        </form>
        <ListGroup as="ol" numbered>
          {cityList}
        </ListGroup>
      </>
    );
  }
}

export default App;
