from datetime import datetime, timedelta

from sqlalchemy import desc

from ..models import Tweet, TweetCount
from politicapro import db

from .trackers import trackers

class TrendModel():

    def store_tweet(self, tweet):
        db.session.add(tweet)
        db.session.commit()

    def get_counts(self):
        
        base_obj = {
            'labels' : [],
            'counts': [],
            'countLabel': 'Tweet count'
        } 

        res = db.session.query(TweetCount).all()

        for counter in res:
            base_obj['labels'] += [counter.key]
            base_obj['counts'] += [counter.count]

        return base_obj

    def account_for_tweet(self, raw_tweet):

        key = None
        for tracker in trackers:
            if tracker in raw_tweet.lower(): 
                key = tracker
        
        if key is None: raise ValueError('The key was not found in raw tweet')

        counter = db.session.query(TweetCount) \
            .filter(TweetCount.key==key) \
            .first()

        if counter is None:
            counter = TweetCount(key)
            db.session.add(counter)
            counter.count = 1
        else:
            counter.count += 1 

        counter.for_date = datetime.now()
        db.session.commit()
        






