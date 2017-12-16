import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as uiSelectors from '../reducers/ui';

class Image extends Component {
  render() {
    const { isImageShown, toggleImage } = this.props;

    return (
      <div className="container">
        <div onClick={toggleImage}>Toggle image</div>
        {isImageShown && <p>image</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // foods: entitySelectors.getAllFoods(state.entities),
});

const mapDispatchToProps = {
  // addFood: fromFoods.addFood,
};

// const FoodsConnected = connect(mapStateToProps, mapDispatchToProps)(Foods);

export { Image };
