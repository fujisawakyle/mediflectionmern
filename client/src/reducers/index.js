import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import mediflectionsReducer from './mediflectionsReducer';
import selectMediflectionReducer from './selectMediflectionReducer';
import daysArrayReducer from './daysArrayReducer';

export default combineReducers({
  user: authReducer,
  form: reduxForm,
  mediflections: mediflectionsReducer,
  selectedMediflection: selectMediflectionReducer,
  daysArray: daysArrayReducer
});
