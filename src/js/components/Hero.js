import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-title"></div>
        <div className="hero-overview"></div>
        <a className="hero-play-button"></a>
        <img className="hero-backdrop"/>
      </div>
    );
  }
}

export default Hero;
