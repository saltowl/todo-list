import { createStore } from 'redux';
import rootReducer from './reducers';
import { INITIAL_STATE, KEY } from './constants';

const list = localStorage[KEY] ? JSON.parse(localStorage[KEY]) : [];

const state = {
  ...INITIAL_STATE,
  todos: { list },
};

const store = createStore(rootReducer, state);

store.subscribe(() => {
  if (localStorage) {
    if (store.getState().todos.list.length > 0) {
      const { list } = store.getState().todos;
      localStorage[KEY] = JSON.stringify(list);
    } else {
      localStorage.removeItem(KEY);
    }
  }
});

export default store;
