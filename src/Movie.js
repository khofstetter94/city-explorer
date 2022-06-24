import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './App.css';

class Movie extends React.Component {
  render() {
    return (<>
      <Card className='card' style={{ width: '40rem' }}>
        <Card.Img className='movieimg' variant="top" src={this.props.movie.image_url} alt={this.props.movie.title} />
        <Card.Body>
          <Card.Title className='movietitle'>{this.props.movie.title}</Card.Title>
          <Card.Text className='moviedescription'>
             {this.props.movie.overview}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Average votes: {this.props.movie.average_votes}</ListGroupItem>
          <ListGroupItem>Total votes: {this.props.movie.total_votes}</ListGroupItem>
          <ListGroupItem>Movie popularity: {this.props.movie.popularity}</ListGroupItem>
          <ListGroupItem>Release date: {this.props.movie.released_on}</ListGroupItem>
        </ListGroup>
      </Card>
    </>)
  }
}

export default Movie;
