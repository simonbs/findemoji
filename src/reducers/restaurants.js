import { combineReducers } from 'redux';
import { CLEAR_RESTAURANTS, REQUEST_RESTAURANTS, RECEIVE_RESTAURANTS, REQUEST_RESTAURANTS_FAILURE } from '../actions';

const initialState = {
  isFetching: false,
  latestQuery: null,
  items: []
};

export default function restaurants(state = initialState, action) {
  let isCurrentQuery = action.query == state.latestQuery
  switch (action.type) {
    case CLEAR_RESTAURANTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: [],
        latestQuery: null
      });
    case REQUEST_RESTAURANTS:
      return Object.assign({}, state, {
        isFetching: true,
        latestQuery: action.query
      });
    case RECEIVE_RESTAURANTS:
      return !isCurrentQuery ? state : Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    case REQUEST_RESTAURANTS_FAILURE:
      return !isCurrentQuery ? state : Object.assign({}, state, {
        isFetching: false,
        items: []
      });
    default:
      return state;
  }
}
