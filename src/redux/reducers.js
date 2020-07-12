import { combineReducers } from 'redux';
import * as constants from './constants';

const todoListReducer = (state = constants.INITIAL_STATE.todos, action = {}) => {
  switch (action.type) {
    case constants.ADD_TODO: {
      const { todo } = action.payload;
      return {
        ...state,
        list: [...state.list, todo],
      };
    }

    case constants.DELETE_TODO: {
      const { id } = action.payload;
      const idx = state.list.findIndex((todo) => todo.id === id);
      return {
        ...state,
        list: [...state.list.slice(0, idx), ...state.list.slice(idx + 1)],
      };
    }

    case constants.TOGGLE_TODO_PROPERTY: {
      const { id, prop } = action.payload;
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === id ? { ...item, [prop]: !item[prop] } : item,
        ),
      };
    }

    case constants.INSERT_TODO_BEFORE: {
      const { current, next } = action.payload;
      const { list } = state;
      const from = list.findIndex((item) => item.id === current);
      const to = list.findIndex((item) => item.id === next);
      const newList =
        from < to
          ? [
              ...list.slice(0, from),
              ...list.slice(from + 1, to),
              list[from],
              ...list.slice(to),
            ]
          : [
              ...list.slice(0, to),
              list[from],
              ...list.slice(to, from),
              ...list.slice(from + 1),
            ];
      return {
        ...state,
        list: newList,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default combineReducers({
  todos: todoListReducer,
});

export const getTodos = (state) => state.todos.list;
