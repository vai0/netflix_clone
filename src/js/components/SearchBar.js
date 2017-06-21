import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchbar">
        <div className="search-button">Search</div>
        <input className="search-input-bar"/>
      </div>
    );
  }
}

export default SearchBar;
