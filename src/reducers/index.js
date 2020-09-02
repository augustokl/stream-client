import { combineReducers } from 'redux';
import { reducer as ReduxForm } from 'redux-form';
import authReducers from './authReducers';
import streamReducers from './streamReducers';

export default combineReducers({
  auth: authReducers,
  form: ReduxForm,
  streams: streamReducers,
});
