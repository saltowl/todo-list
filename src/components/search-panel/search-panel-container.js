import React from 'react';
import SearchPanel from './search-panel-view';

export default class SearchPanelContainer extends React.Component {
  state = {
    value: '',
  };

  onChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    return <SearchPanel value={this.state.value} onChange={this.onChange} />;
  }
}
