import React, { Component } from 'react';
import { Foods } from './Foods';
import { Image } from './Image';
import { Counter } from './Counter';

export const App = () =>
  <header>
    <div>Webpack + React 16 + Flask-Webpack + Docker</div>
    <Counter />
    <Foods />
    <Image />
  </header>;
