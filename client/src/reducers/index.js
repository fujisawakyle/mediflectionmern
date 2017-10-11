import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import mediflectionsReducer from './mediflectionsReducer';

export default combineReducers({
  user: authReducer,
  form: reduxForm,
  mediflections: mediflectionsReducer
});
