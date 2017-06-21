import React from 'react';
import Search from 'Search';

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
          <li></li>
          <li></li>
        </ul>

        <Search />

        <div className="account-component">
          <div className="account-avatar"></div>
          <div className="account-name"></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
