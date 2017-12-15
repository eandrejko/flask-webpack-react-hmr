import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as fromFoods from '../reducers/foods/api';

class Foods extends Component {
  render() {
    return <div>foods</div>;
  }
}

const mapStateToProps = state => ({ foods: 'pasta' });

const mapDispatchToProps = {
  addFood: fromFoods.addFood,
};

const FoodsConnected = connect(mapStateToProps, mapDispatchToProps)(Foods);

export { FoodsConnected as Foods };
