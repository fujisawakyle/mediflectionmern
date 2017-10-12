import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import mediflectionsReducer from './mediflectionsReducer';
import updateDate from './updateDateReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  user: authReducer,
  form: reduxForm,
  mediflections: mediflectionsReducer,
  date: updateDate,
  data: dataReducer
});
