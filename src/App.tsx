import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Count } from './components/Count';
import { deleteTodo, fetchTodos } from './store/actions/todo.action';
import { StoreState } from './store/reducers/index.reducer';
import { Todo } from './types/todo.types';

interface IProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): any;
}

interface IState {
  counter: number;
}

class _App extends Component<IProps, IState> {
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

  public onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  public onDeleteItem = (id: number): void => {
    this.props.deleteTodo(id);
  };

  public onRenderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => (
      <li key={todo.id} onClick={() => this.onDeleteItem(todo.id)}>
        {todo.title}
      </li>
    ));
  };

  render() {
    return (
      <div>
        <Count count={this.state.counter} color="red" />
        <br />
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>

        <br />
        <button onClick={this.onButtonClick}>Fetch</button>
        <br />
        <ul>{this.onRenderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ todoReducer }: StoreState) => {
  return {
    todos: todoReducer.todos,
  };
};

export const App = connect(mapStateToProps, {
  fetchTodos,
  deleteTodo,
})(_App);
