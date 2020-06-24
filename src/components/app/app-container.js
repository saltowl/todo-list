import React from 'react';
import App from './app-view';
import uniqid from 'uniqid';

export default class AppContainer extends React.PureComponent {
  state = {
    filter: '',
    searchValue: '',
  };

  addItem = (text) => {
    const todo = {
      label: text,
      done: false,
      important: false,
      id: uniqid(),
    };
    this.props.addTodo(todo);
  };

  deleteItem = (id) => {
    this.props.deleteTodo(id);
  };

  filterTodos = (filter) => {
    this.setState({ filter });
  };

  handleSearch = (searchValue) => {
    this.setState({ searchValue });
  };

  filter(items, term) {
    let filteredTodos;
    switch (term) {
      case 'done': {
        filteredTodos = items.filter(({ done }) => done);
        break;
      }
      case 'active': {
        filteredTodos = items.filter(({ done }) => !done);
        break;
      }
      default: {
        filteredTodos = items;
        break;
      }
    }
    return filteredTodos;
  }

  search(items, term) {
    if (term.length > 0) {
      return items.filter(({ label }) =>
        label.toLowerCase().includes(term.toLowerCase()),
      );
    }
    return items;
  }

  render() {
    const filteredTodos = this.search(
      this.filter(this.props.todos, this.state.filter),
      this.state.searchValue,
    );

    return (
      <App
        addItem={this.addItem}
        deleteItem={this.deleteItem}
        todos={this.props.todos}
        filteredTodos={filteredTodos}
        filterTodos={this.filterTodos}
        handleSearch={this.handleSearch}
      />
    );
  }
}
