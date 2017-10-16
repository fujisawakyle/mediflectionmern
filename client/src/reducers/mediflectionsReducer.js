import _ from 'lodash';
import { FETCH_MEDIFLECTIONS, UPDATE_MEDIFLECTION } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEDIFLECTIONS:
      return _.mapKeys(action.payload, 'date');
    case UPDATE_MEDIFLECTION:
      return { ...state, [action.payload.date]: action.payload };
    default:
      return state;
  }
}
