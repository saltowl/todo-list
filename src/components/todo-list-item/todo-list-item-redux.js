import TodoListItem from './todo-list-item-view';
import { connect } from 'react-redux';
import { toggleTodoProperty } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  toggleTodoProperty: (id, prop) => dispatch(toggleTodoProperty(id, prop)),
});

export default connect(null, mapDispatchToProps)(TodoListItem);
