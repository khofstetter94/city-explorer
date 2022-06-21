import React from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cityResults: []
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    // make a request to locationIQ to get data
    let cities =  await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.f2b3276faf9d9b2175054fcff45d3803&q=${event.target.chosencity.value}&format=json`);
    //save the data in state
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
    </ListGroup.Item>
    })
    return (
      <>
        <h1>Find a City!</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="chosencity"></input>
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
