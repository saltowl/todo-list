import * as constants from './constants';

export const addTodo = (todo) => ({
  type: constants.ADD_TODO,
  payload: { todo },
});

export const deleteTodo = (id) => ({
  type: constants.DELETE_TODO,
  payload: { id },
});

export const toggleTodoProperty = (id, prop) => ({
  type: constants.TOGGLE_TODO_PROPERTY,
  payload: {
    id,
    prop,
  },
});

export const insertTodoBefore = (current, next) => ({
  type: constants.INSERT_TODO_BEFORE,
  payload: {
    current,
    next,
  },
});
