import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero">
        <div class="hero-title"></div>
        <div class="hero-overview"></div>
        <a class="hero-play-button"></a>
        <img class="hero-backdrop"/>
      </div>
    );
  }
}

export default Hero;
