import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as fromFoods from '../reducers/entities/foods/api';
import * as entitySelectors from '../reducers/entities';

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
  foods: entitySelectors.getAllFoods(state.entities),
});

const mapDispatchToProps = {
  addFood: fromFoods.addFood,
};

const FoodsConnected = connect(mapStateToProps, mapDispatchToProps)(Foods);

export { FoodsConnected as Foods };
