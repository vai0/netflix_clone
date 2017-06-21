import React from 'react';
import SimilarMovie from 'SimilarMovie';

class SimilarCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="selected-movie-similar-carousel-component">
        <SimilarMovie />
      </div>
    );
  }
}

export default SimilarCarousel;
