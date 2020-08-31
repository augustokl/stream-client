import { combineReducers } from 'redux';
import { reducer as ReduxForm} from 'redux-form'
import authReducers from './authReducers';

export default combineReducers({
  auth: authReducers,
  form: ReduxForm
})