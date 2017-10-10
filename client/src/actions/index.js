import axios from 'axios';
import { FETCH_USER, UPDATE_MEDIFLECTION } from './types';

//if redux thunk sees we return a function in a action creator,
//it will automatically pass in dispatch as an arg.
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateMediflection = values => async dispatch => {
  console.log('yah', values);
  const res = await axios.post('/api/mediflections', values);

  dispatch({ type: UPDATE_MEDIFLECTION, payload: res.data });
};
