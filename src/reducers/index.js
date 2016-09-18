import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import {
  FILTER_ARTISTS,
  PUSH_ARTISTS,
  SORT_ARTISTS,
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
      }
    case FILTER_ARTISTS:
      return {
        ...state,
        filtered: action.filtered,
      }
    case SORT_ARTISTS:
      return {
        ...state,
        data: action.sorted,
        filtered: action.sortedFiltered,
      }
    default:
      return state
  }
};
const sortParam = (state = {
  age: 'ASC',
  rate: 'DESC',
}, action) => {
  switch (action.type) {
    case SORT_ARTISTS:
      return {
        ...state,
        [action.param]: action.sortType === 'DESC' ? 'ASC' : 'DESC',
      }
    default:
      return state
  }
};
// const filters = (state = {}, action) => {
//   switch (action.type) {
//     case AGE_FILTER:
//       return {
//         ...state,
//         age: {
//           ...state.age,
//           ...action.data,
//         },
//       }
//     case RATE_FILTER:
//       return {
//         ...state,
//         rate: {
//           ...state.rate,
//           ...action.data,
//         },
//       }
//     case GENDER_FILTER:
//       return {
//         ...state,
//         gender: action.data,
//       }
//     default:
//       return state
//   }
// };
const rootReducer = combineReducers({
  artists,
  sortParam,
  form: formReducer,
})

export default rootReducer
