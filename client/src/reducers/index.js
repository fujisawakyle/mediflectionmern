import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import updateReducer from './updateReducer';

export default combineReducers({
  user: authReducer,
  form: reduxForm,
  update: updateReducer
});
