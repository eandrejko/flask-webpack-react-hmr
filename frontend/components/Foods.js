import React from 'react';
import { connect } from 'react-redux';
import * as fromFoods from '../reducers/entities/foods/api';

const Foods = ({ addFood, foods }) =>
  <div className="container">
    <div onClick={addFood}>Add a food</div>
    <ul>
      {foods.map((food, i) =>
        <li key={i}>
          {food.name}
        </li>,
      )}
    </ul>
  </div>;

const mapStateToProps = state => ({
  foods: fromFoods.getAllFoods(state),
});

const mapDispatchToProps = {
  addFood: fromFoods.addFood,
};

const FoodsConnected = connect(mapStateToProps, mapDispatchToProps)(Foods);

export { FoodsConnected as Foods };
