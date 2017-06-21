import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="selected-movie-details">
        <div className="selected-movie-details-director"></div>
        <div className="selected-movie-details-cast"></div>
        <div className="selected-movie-details-genres"></div>
        <div className="selected-movie-details-director"></div>
        <div className="selected-movie-details-reviews"></div>
        <div className="selected-movie-details-mpaa-rating"></div>
      </div>
    );
  }
}

export default Details;
