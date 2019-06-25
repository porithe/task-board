import { combineReducers } from 'redux';
import todos from './todos';
import inprog from './inprog';
import done from './done';
import editBlock from './editBlock';

export default combineReducers({
  todos,
  inprog,
  done,
  editBlock
})