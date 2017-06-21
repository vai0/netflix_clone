import React from 'react';
import SearchResultsRow from 'SearchResultsRow';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-results">
        <div className="search-results-title"></div>
        <SearchResultsRow />
      </div>
    );
  }
}

export default SearchResults;
