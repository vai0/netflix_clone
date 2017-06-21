import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie">
        <div className="movie-play-button"></div>
        <div className="movie-title"></div>
        <div className="movie-year"></div>
        <div className="movie-mpaa-rating"></div>
        <div className="movie-runtime"></div>
        <div className="movie-overview"></div>
        <div className="movie-expand-button"></div>
        <img className="movie-backdrop"/>
      </div>
    );
  }
}

export default Movie;
