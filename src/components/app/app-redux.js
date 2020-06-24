import App from './app-container';
import { connect } from 'react-redux';
import { getTodos } from '../../redux/reducers';
import { addTodo, deleteTodo } from '../../redux/actions';

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
