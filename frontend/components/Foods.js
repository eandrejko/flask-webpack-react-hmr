import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as fromFoods from '../reducers/entities/foods/api';

Foods.propTypes = {
  addFood: PropTypes.func.isRequired,
  foods: PropTypes.array.isRequired,
};

const Foods = ({ addFood, foods }) => (
  <div className="container">
    <div onClick={addFood}>Add a food</div>
    <ul>{foods.map((food, i) => <li key={i}>{food.name}</li>)}</ul>
  </div>
);

const mapStateToProps = state => ({
  foods: fromFoods.getAllFoods(state),
});

const mapDispatchToProps = {
  addFood: fromFoods.addFood,
};

const FoodsConnected = connect(mapStateToProps, mapDispatchToProps)(Foods);

export { FoodsConnected as Foods };
