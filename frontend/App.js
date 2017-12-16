import React, { Component } from 'react';
import { Counter, Foods, Image } from './components';

export const App = () => (
  <header>
    <div>Webpack + React 16 + Flask-Webpack + Docker</div>
    <Counter />
    <Foods />
    <Image />
  </header>
);
