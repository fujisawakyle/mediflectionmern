import axios from 'axios';
import {
  FETCH_USER,
  FETCH_MEDIFLECTIONS,
  FETCH_MEDIFLECTION,
  UPDATE_MEDIFLECTION,
  UPDATE_DAYS_ARRAY
} from './types';

//if redux thunk sees we return a function in a action creator,
//it will automatically pass in dispatch as an arg.
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMediflections = callback => async dispatch => {
  const res = await axios.get('/api/mediflections');

  dispatch({ type: FETCH_MEDIFLECTIONS, payload: res.data });

  await callback();
};

export const fetchMediflection = (date, mediflection) => {
  if (!mediflection) {
    mediflection = {};
    mediflection.date = date;
    mediflection.entry = '';
    mediflection.time = 0;
  }
  return {
    type: FETCH_MEDIFLECTION,
    payload: mediflection
  };
};

export const updateMediflection = mediflection => dispatch => {
  axios.post('/api/mediflection', mediflection);
  dispatch({ type: UPDATE_MEDIFLECTION, payload: mediflection });
};

export const updateDaysArray = dateArray => {
  return {
    type: UPDATE_DAYS_ARRAY,
    payload: dateArray
  };
};
