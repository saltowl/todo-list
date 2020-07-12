import TodoList from './todo-list';
import { connect } from 'react-redux';
import { insertTodoBefore } from '../../redux/actions';

export default connect(null, { insertTodoBefore })(TodoList);
