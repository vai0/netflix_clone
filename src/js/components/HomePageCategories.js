import React from 'react';
import CategoryRow from 'CategoryRow';

class HomePageCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-categories">
        <CategoryRow />
      </div>
    );
  }
}

export default HomePageCategories;
