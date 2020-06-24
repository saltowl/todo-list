import React from 'react';
import ItemStatusFilter from './item-status-filter-view';

export default class ItemStatusFilterContainer extends React.Component {
  buttons = [
    { label: 'All', filter: 'all' },
    { label: 'Active', filter: 'active' },
    { label: 'Done', filter: 'done' },
  ];

  state = {
    active: 0,
  };

  filterTodos = (filter) => {
    this.props.filterTodos(filter);
    const active = this.buttons.findIndex((button) => button.filter === filter);
    this.setState({ active });
  };

  render() {
    return (
      <ItemStatusFilter
        filterTodos={this.filterTodos}
        buttons={this.buttons}
        active={this.state.active}
      />
    );
  }
}
