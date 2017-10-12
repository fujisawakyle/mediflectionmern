import { FETCH_MEDIFLECTIONS, CHOOSE_DAY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEDIFLECTIONS:
      return action.payload;
    default:
      return state;
  }
}
