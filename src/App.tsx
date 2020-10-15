import React, { Component } from 'react';

interface IProps {}

interface IState {
  counter: number;
}

class App extends Component<IProps, IState> {
  // can be specified by using IState or just by using the shorthand state constructor (state = {counter: 0}). This last one will set the state automatically!
  constructor(props: IProps) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  public onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  public onDecrement = (): void => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <div>Counter: {this.state.counter}</div>
        <br />
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
