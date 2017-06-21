import React from 'react';
import SimilarCarousel from 'SimilarCarousel';

class Similar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="selected-movie-similar">
        <SimilarCarousel />
      </div>
    );
  }
}

export default Similar;
