import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as fromFoods from '../reducers/entities/foods/api';

const Foods = ({ addFood, foods }) => (
  <div className="container">
    <div onClick={addFood} onKeyDown={addFood} role="button" tabIndex={0}>
      Add a food
    </div>
    <ul>{foods.map(food => <li key={food.id}>{food.name}</li>)}</ul>
  </div>
);

Foods.propTypes = {
  addFood: PropTypes.func.isRequired,
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  foods: fromFoods.getAllFoods(state),
});

const mapDispatchToProps = {
  addFood: fromFoods.addFood,
};

const FoodsConnected = connect(mapStateToProps, mapDispatchToProps)(Foods);

export { FoodsConnected as Foods };
