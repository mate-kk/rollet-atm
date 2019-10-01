import { combineReducers } from 'redux';
import OperatorReducer from './OperatorReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  operator: OperatorReducer,
  user: UserReducer,
});
