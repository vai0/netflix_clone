import React from 'react';
import Movie from 'Movie';

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movies">
        <Movie />
      </div>
    );
  }
}

export default Movies;
