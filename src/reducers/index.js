import { combineReducers } from 'redux';
import {
  PUSH_ARTISTS,
} from '../actions';

const artists = (state = {
  isFetching: false,
  data: []
}, action) => {
  switch (action.type) {
    case PUSH_ARTISTS:
      return {
        ...state,
        isFetching: false,
        data: action.json.artists,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  artists,
})

export default rootReducer
