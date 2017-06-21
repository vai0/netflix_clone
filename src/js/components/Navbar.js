import React from 'react';
import SearchBar from 'SearchBar';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo"></div>
        <div className="browse-button"></div>
        <ul className="browse-dropdown">
        </ul>
        <SearchBar />
        <div className="account-component">
          <div className="account-avatar"></div>
          <div className="account-name"></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
