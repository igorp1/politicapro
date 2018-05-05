from multiprocessing import Pool
from .credentials import api_key, api_secret, access_token, access_token_secret

from tweepy import Stream
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener

from ..models import Tweet

from .trackers import trackers
from .TrendModel import TrendModel

## Twitter 
class TwitterStreamListener(StreamListener):

    def __init__(self):
        self.trend_model = TrendModel()

    def on_data(self, data):
        try:
            # tweet = Tweet(data) <== use this to create tweet object
            self.trend_model.account_for_tweet(data)

        except Exception as err:
            self.log_error(str(err))

        return True

    def on_error(self, status):
        self.log_error('Error' + str(status) )
    
    def log_error(self, error):
        with open("stream_error.log", "a") as error_log:
            error_log.write(error + '\n')


class TwitterStream():

    def __init__(self,keywords):

        self.auth = None
        self.stream = None

        self.start_stream(keywords)

    def setup_auth(self):
        if self.auth is not None: return 

        self.auth = OAuthHandler(api_key, api_secret)
        self.auth.set_access_token(access_token, access_token_secret)

    def start_stream(self, keywords):

        self.setup_auth()

        self.listener = TwitterStreamListener()
        self.stream = Stream(self.auth, self.listener)
        self.stream.filter(track=keywords)
 

# functions to get stream running
def stream_async_start_for_key(keywords):
    TwitterStream(keywords)


def start_twitter_stream():
    print('[PoliticaPro] Starting stream')

    pool = Pool(processes=1)
    result = pool.apply_async(stream_async_start_for_key, [trackers])

   
