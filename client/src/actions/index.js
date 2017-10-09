import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  //if redux thunk sees we return a function in a action creator,
  //it will automatically pass in dispatch as an arg.
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
