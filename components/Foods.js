import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as fromFoods from '../reducers/foods/api';

class Foods extends Component {
  render() {
    const { addFood } = this.props;
    console.log(addFood);
    const food = {
      id: 1,
      name: 'spinach',
    };

    return (
      <div className="container">
        <div onClick={() => addFood(food)}>Add a food</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ foods: 'pasta' });

const mapDispatchToProps = {
  addFood: fromFoods.addFood,
};

const FoodsConnected = connect(mapStateToProps, mapDispatchToProps)(Foods);

export { FoodsConnected as Foods };
