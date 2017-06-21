import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="selected-movie-overview-component">
        <div className="selected-movie-year"></div>
        <div className="selected-movie-mpaa-rating"></div>
        <div className="selected-movie-runtime"></div>
        <div className="selected-movie-overview"></div>
        <div className="selected-movie-starring"></div>
        <div className="selected-movie-director"></div>
        <div className="selected-movie-genres"></div>
      </div>
    );
  }
}

export default Overview;
