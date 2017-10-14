import axios from 'axios';
import {
  FETCH_USER,
  UPDATE_MEDIFLECTION,
  FETCH_MEDIFLECTIONS,
  UPDATE_DATE,
  FETCH_DATA
} from './types';

//if redux thunk sees we return a function in a action creator,
//it will automatically pass in dispatch as an arg.
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateMediflection = (values, date) => async dispatch => {
  console.log('updateMed', values);
  const res = await axios.post('/api/mediflections', values);

  dispatch({ type: UPDATE_MEDIFLECTION, payload: res.data });
};

export const fetchMediflections = () => async dispatch => {
  const res = await axios.get('/api/mediflections');
  console.log('in FM actionC', res.data);
  dispatch({ type: FETCH_MEDIFLECTIONS, payload: res.data });
};

export const updateDate = value => {
  console.log('chooseDay', value);

  return { type: UPDATE_DATE, payload: value };
};

export const fetchData = value => {
  console.log('value', value);
  if (Object.keys(value).length === 0) {
    value.entry = '';
    value.time = 0;
  }
  console.log('value', value);
  return { type: FETCH_DATA, payload: value };
};
