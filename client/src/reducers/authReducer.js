import { FETCH_USER } from '../actions/types';

//if still waiting for verfication, return null,
//if signed in, return user, else return false
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
