import fetch from 'isomorphic-fetch';

export const CLEAR_RESTAURANTS = 'CLEAR_RESTAURANTS';
export const REQUEST_RESTAURANTS = 'REQUEST_RESTAURANTS';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const REQUEST_RESTAURANTS_FAILURE = 'REQUEST_RESTAURANTS_FAILURE';

export function clearRestaurants() {
  return {
    type: CLEAR_RESTAURANTS
  };
}

export function requestRestaurants(query) {
  return {
    type: REQUEST_RESTAURANTS,
    query: query
  };
}

export function fetchRestaurants(query) {
  return dispatch => {
    dispatch(requestRestaurants(query));
    let encodedQuery = encodeURIComponent(query);
    return fetch(`http://smiley.menuindex.dk/api/smiley/search?pattern=${encodedQuery}&pageNumber=1&pageSize=10`)
      .then(req => req.json())
      .then(json => dispatch(receiveRestaurants(query, json)));
  };
}

export function receiveRestaurants(query, json) {
  return {
    type: RECEIVE_RESTAURANTS,
    query: query,
    items: json
  }
}

export function requestRestaurantsFailure() {
  return {
    type: REQUEST_RESTAURANTS_FAILURE
  }
}
