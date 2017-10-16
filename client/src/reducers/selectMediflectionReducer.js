import { FETCH_MEDIFLECTION } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MEDIFLECTION:
      return action.payload;
    default:
      return state;
  }
}
