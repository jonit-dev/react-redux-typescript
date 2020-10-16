import { Dispatch } from 'redux';

import { jsonPlaceholderAxios } from '../../constants/jsonplaceholder.axios';
import { APIHelper } from '../../libs/APIHelper';
import { Todo, TodoActionTypes } from '../../types/todo.types';
import { IAction } from '../reducers/index.reducer';

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const response = await APIHelper.request<Todo[]>(
    jsonPlaceholderAxios,
    "GET",
    "/todos"
  );
  dispatch<IAction<TodoActionTypes, Todo[]>>({
    type: TodoActionTypes.fetchTodos,
    payload: response.data,
  });
};

export const deleteTodo = (id: number): IAction<TodoActionTypes, number> => {
  return {
    type: TodoActionTypes.deleteTodo,
    payload: id,
  };
};
