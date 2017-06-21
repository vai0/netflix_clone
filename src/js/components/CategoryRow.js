import React from 'react';
import CategoryCarousel from 'CategoryCarousel';
import SelectedMovie from 'SelectedMovie';

class CategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category-row">
        <div className="category-title"></div>
        <CategoryCarousel />
        <SelectedMovie />
      </div>
    );
  }
}

export default CategoryRow;
