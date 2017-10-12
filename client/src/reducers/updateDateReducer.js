import { UPDATE_DATE } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_DATE:
      return action.payload;
    default:
      return state;
  }
}
