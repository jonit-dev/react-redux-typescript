import { ActionTodo, Todo, TodoActionTypes } from '../../types/todo.types';

interface IState {
  todos: Todo[];
}

const initialState = {
  todos: [],
};

export const todoReducer = (
  state: IState = initialState,
  action: ActionTodo
) => {
  switch (action.type) {
    case TodoActionTypes.fetchTodos:
      return { ...state, todos: action.payload };

    case TodoActionTypes.deleteTodo:
      const deleteId = Number(action.payload);

      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== deleteId),
      };
    default:
      return state;
  }
};
