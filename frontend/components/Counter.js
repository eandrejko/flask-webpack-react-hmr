import React, { Component } from 'react';

export class Counter extends Component {
  state = { counter: 0 };

  componentDidMount() {
    this.interval = setInterval(this.increment.bind(this), 1000);
  }

  increment() {
    this.setState(({ counter }) => {
      return { counter: counter + 1 };
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        {counter}
      </div>
    );
  }
}
