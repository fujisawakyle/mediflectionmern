import _ from 'lodash';
import { UPDATE_DAYS_ARRAY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_DAYS_ARRAY:
      return _.union(state, action.payload);
    default:
      return state;
  }
}
