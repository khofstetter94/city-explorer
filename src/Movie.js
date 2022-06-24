import React from 'react';

class Movie extends React.Component {
  render() {
    return (<>
      <li>{this.props.movie.title}</li>
      <li><img src={this.props.movie.image_url} alt={this.props.movie.title}/></li>
      <li>{this.props.movie.overview}</li>
      <li>Average votes: {this.props.movie.average_votes}</li>
      <li>Total votes: {this.props.movie.total_votes}</li>
      <li>Movie popularity: {this.props.movie.popularity}</li>
      <li>Release date: {this.props.movie.released_on}</li>
    </>)
  }
}

export default Movie;
