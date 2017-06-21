import React from 'react';
import Movie from 'Movie';

class CategoryCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category-carousel">
        <Movie />
      </div>
    );
  }
}

export default CategoryCarousel;
