import React from 'react';

class Movies extends React.Component {
  render() {
    let movies = this.props.movies.map(movie => {
      return (
        <>
          <li>{movie.title}</li>
          <li><img src={movie.image_url} alt={movie.title}/></li>
          <li>{movie.overview}</li>
          <li>Average votes: {movie.average_votes}</li>
          <li>Total votes: {movie.total_votes}</li>
          <li>Movie popularity: {movie.popularity}</li>
          <li>Release date: {movie.released_on}</li>
        </>
      );
    });

    return <ul>{movies}</ul>
  }
}

export default Movies;
