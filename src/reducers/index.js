import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import {
  FILTER_ARTISTS,
  PUSH_ARTISTS,
  // AGE_FILTER,
  // RATE_FILTER,
  // GENDER_FILTER,
} from '../actions';

const artists = (state = {
  data: []
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
        dataFiltered: action.filtered,
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
  form: formReducer,
})

export default rootReducer
