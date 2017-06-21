import React from 'react';

class SimilarMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="selected-movie-similar-movie">
        <div className="selected-movie-similar-movie-thumbnail">
          <img className="selected-movie-similar-movie-backdrop"/>
          <div className="selected-movie-similar-movie-play-button"></div>
        </div>
        <div className="selected-movie-similar-movie-year"></div>
        <div className="selected-movie-similar-movie-mpaa-rating"></div>
        <div className="selected-movie-similar-movie-runtime"></div>
        <div className="selected-movie-similar-movie-overview"></div>
      </div>
    );
  }
}

export default SimilarMovie;
