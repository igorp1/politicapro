import * as types from './actionTypes.config';

export default function (state = [], action) {
    switch(action.type){
        case types.CREATE_TWEET:
            return [Object.assign({}, action.tweet), ...state ]; 
        case types.LOAD_TWEETS_SUCCESS:
            return [...action.tweets, ...state ];
        default:
            return state;
    }
}