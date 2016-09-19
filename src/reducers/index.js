import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  SHOW_ERROR,
  HIDE_ERROR,
  FILTER_ARTISTS,
  PUSH_ARTISTS,
  SORT_ARTISTS,
  CHANGE_LAYOUT,
} from '../actions';

const artists = (state = {
  data: [],
  filtered: [],
}, action) => {
  switch (action.type) {
    case PUSH_ARTISTS:
      return {
        ...state,
        data: action.json.artists,
      };
    case FILTER_ARTISTS:
      return {
        ...state,
        filtered: action.filtered,
      };
    case SORT_ARTISTS:
      return {
        ...state,
        data: action.sorted,
        filtered: action.sortedFiltered,
      };
    default:
      return state;
  }
};

const sortParam = (state = {
  age: 'ASC',
  rate: 'ASC',
}, action) => {
  switch (action.type) {
    case SORT_ARTISTS:
      return {
        ...state,
        [action.param]: action.sortType === 'DESC' ? 'ASC' : 'DESC',
      };
    default:
      return state;
  }
};

const error = (state = { message: '' }, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        message: action.error,
      };
    case HIDE_ERROR:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};

const page = (state = { layout: 'cards' }, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.layout,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  artists,
  error,
  page,
  sortParam,
  form: formReducer,
});

export {
  artists,
};

export default rootReducer;
