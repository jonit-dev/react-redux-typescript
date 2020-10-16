export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export enum TodoActionTypes {
  fetchTodos,
  deleteTodo,
}

export interface ActionTodoFetch {
  type: TodoActionTypes.fetchTodos;
  payload: Todo[];
}

export interface ActionTodoDelete {
  type: TodoActionTypes.deleteTodo;
  payload: number;
}

export type ActionTodo = ActionTodoFetch | ActionTodoDelete;
