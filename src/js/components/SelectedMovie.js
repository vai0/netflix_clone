import React from 'react';
import Overview from 'Overview';
import Similar from 'Similar';
import Details from 'Details';

class SelectedMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="selected-movie">
        <div className="selected-movie-cancel-button"></div>
        <div className="selected-movie-title"></div>
        <Overview />
        <Similar />
        <Details />
        <div className="selected-movie-tab-group">
          <a className="selected-movie-tabs" href="#">overview</a>
          <a className="selected-movie-tabs" href="#">more like this</a>
          <a className="selected-movie-tabs" href="#">details</a>
        </div>
      </div>
    );
  }
}

export default SelectedMovie;
