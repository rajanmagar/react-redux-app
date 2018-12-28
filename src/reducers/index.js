import { combineReducers } from 'redux';
import storyReducer from './story';

const rootReducer = combineReducers({
  storyState: storyReducer,
});

export default rootReducer;