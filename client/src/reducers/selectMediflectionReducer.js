import { FETCH_MEDIFLECTION } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MEDIFLECTION:
      console.log('in red, action.payload', action.payload);
      return action.payload;
    default:
      return state;
  }
}
