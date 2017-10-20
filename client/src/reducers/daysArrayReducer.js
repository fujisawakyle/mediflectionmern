import { UPDATE_DAYS_ARRAY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_DAYS_ARRAY:
      return state.concat(action.payload);
    default:
      return state;
  }
}
