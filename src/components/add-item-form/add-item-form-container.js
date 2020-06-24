import React from 'react';
import AddItemForm from './add-item-form-view';

export default class AddItemFormContainer extends React.Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <AddItemForm
        {...this.props}
        onLabelChange={this.onLabelChange}
        label={this.state.label}
        onSubmit={this.onSubmit}
      />
    );
  }
}
