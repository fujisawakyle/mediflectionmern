import axios from 'axios';
import { FETCH_USER, UPDATE_MEDIFLECTION, FETCH_MEDIFLECTIONS } from './types';

//if redux thunk sees we return a function in a action creator,
//it will automatically pass in dispatch as an arg.
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateMediflection = values => async dispatch => {
  console.log('updateMed', values);
  const res = await axios.post('/api/mediflections', values);

  dispatch({ type: UPDATE_MEDIFLECTION, payload: res.data });
};

export const fetchMediflections = () => async dispatch => {
  const res = await axios.get('/api/mediflections');
  console.log('in FM actionC', res.data);
  dispatch({ type: FETCH_MEDIFLECTIONS, payload: res.data });
};
