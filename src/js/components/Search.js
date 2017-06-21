import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search">
        <div className="search-button">Search</div>
        <input className="search-input-bar"/>
      </div>
    );
  }
}

export default Search;
