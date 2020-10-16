import { combineReducers } from 'redux';

import { todoReducer } from './todo.reducer';

export interface IAction<T, P> {
  type: T;
  payload: P;
}

export const rootReducer = combineReducers({
  todoReducer: todoReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
