import React from 'react';
import Hero from 'Hero';
import HomePageCategories from 'HomePageCategories';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <Hero />
        <HomePageCategories />
      </div>
    );
  }
}

export default HomePage;
