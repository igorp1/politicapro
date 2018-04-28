import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import App from './app/App';
import configStore from './app/store/store.config';
import { loadTweets } from './app/store/Tweet.action';

const store = configStore();
store.dispatch(loadTweets())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

