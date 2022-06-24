import React from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'
import Weather from './Weather';
import Movies from './Movies';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      cityResults: [],
      movieResults: [],
      error: false,
      errorMessage: ''
    };
  }

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let cities =  await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      let topResult = cities.data[0];
      let forcast = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${topResult.lat}&lon=${topResult.lon}&city=${this.state.city}`)
      let movies = await axios.get(`${process.env.REACT_APP_SERVER}/movies?city=${this.state.city}`)
      this.setState({
        cityResults: [topResult],
        forcast: forcast.data,
        movies: movies.data,
        error: false,
        errorMessage: null
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An error occurred! Status code: ${error.response.status} with message: ${error.response.data}`
      });
    };
  };

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
      <Image className='mapimg' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${city.lat},${city.lon}&zoom=12`} alt="map of city"/>
      <p className='weathersection'>View the 5 day forcast for this city:</p>
      <Weather forcast={this.state.forcast} />
      <p className='moviesection'>Movies related to this city:</p>
      <Movies movies={this.state.movies} />
    </ListGroup.Item>
    })
    return (
      <main>
        <h1>Find a City!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onInput={this.handleCityInput}></input>
          <button type="submit">Explore!</button>
        </form>
        {this.state.error
          ? <p>{this.state.errorMessage}</p>
          : <ListGroup as="ol" numbered>
              {cityList}
            </ListGroup>
        }
      </main>
    );
  }
}


export default App;
