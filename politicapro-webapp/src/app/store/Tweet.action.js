import * as types from './actionTypes.config';
import TweetApi from '../../api/mock-tweets.api';


export function createTweet(tweet) {
    return { type: types.CREATE_TWEET, tweet } // aka: { type: 'CREATE_TWEET', tweet:tweet }
}

export function loadTweetsSuccess(tweets) {
    return { type: types.LOAD_TWEETS_SUCCESS, tweets };
}

export function loadTweets() {
    return function(dispatch){
        return TweetApi.getAllTweets().then(
            tweets => {
                dispatch(loadTweetsSuccess(tweets));
            }
        ).catch(err => { throw(err) });
    }
}