import { combineReducers } from 'redux';
import tweets from './Tweet.reducer';

const rootReducer = combineReducers({
    tweets
})

export default rootReducer;