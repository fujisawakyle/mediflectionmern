import _ from 'lodash';
import { FETCH_MEDIFLECTIONS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEDIFLECTIONS:
      console.log('in red, action.payload', action.payload);
      return _.mapKeys(action.payload, 'date');
    default:
      return state;
  }
}
