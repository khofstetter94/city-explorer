import React from 'react';
import './App.css';

class Movie extends React.Component {
  render() {
    return (<>
      <li className='movieimg'><img src={this.props.movie.image_url} alt={this.props.movie.title}/></li>
      <li className='movietitle'>{this.props.movie.title}</li>
      <li className='moviebullet'>{this.props.movie.overview}</li>
      <li className='moviebullet'>Average votes: {this.props.movie.average_votes}</li>
      <li className='moviebullet'>Total votes: {this.props.movie.total_votes}</li>
      <li className='moviebullet'>Movie popularity: {this.props.movie.popularity}</li>
      <li className='moviebullet'>Release date: {this.props.movie.released_on}</li>
    </>)
  }
}

export default Movie;
