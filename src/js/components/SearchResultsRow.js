import React from 'react';
import Movies from 'Movies';
import SelectedMovie from 'SelectedMovie';

class SearchResultsRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-results-row">
        <Movies />
        <SelectedMovie />
      </div>
    );
  }
}

export default SearchResultsRow;
