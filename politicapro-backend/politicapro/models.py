import uuid, re
from politicapro import db
from sqlalchemy import desc
from sqlalchemy.sql.expression import func

import json

from datetime import datetime

class Tweet(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    tweet_id = db.Column(db.Integer)
    text = db.Column(db.String)
    created_at = db.Column(db.String)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    place = db.Column(db.String)

    user_id = db.Column(db.Integer)
    user_name = db.Column(db.String)
    user_location = db.Column(db.String)
    user_follower_count = db.Column(db.Integer)

    quote_count = db.Column(db.Integer)
    retweet_count = db.Column(db.Integer)
    favorite_count = db.Column(db.Integer)
    reply_count = db.Column(db.Integer)

    def __init__(self, raw_tweet):
        self.parse_tweet(raw_tweet)

    def parse_tweet(self,raw_tweet):

        raw_tweet = json.loads(raw_tweet)

        self.tweet_id = raw_tweet['id']
        self.text = raw_tweet['text']
        self.created_at = raw_tweet['created_at']
        self.user_id = raw_tweet['user']['id']
        self.user_name = raw_tweet['user']['screen_name']
        self.user_location = raw_tweet['user']['location']
        self.user_follower_count = raw_tweet['user']['followers_count']
        self.quote_count = raw_tweet['quote_count']
        self.retweet_count = raw_tweet['retweet_count']
        self.favorite_count = raw_tweet['favorite_count']
        self.reply_count = raw_tweet['reply_count']

        if raw_tweet['coordinates']:
            self.latitude = raw_tweet['coordinates']['coordinates'][0]
            self.longitude = raw_tweet['coordinates']['coordinates'][1]
        
        if raw_tweet['place']:
            self.place = raw_tweet['place']['full_name']

class TweetCount(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    for_date = db.Column(db.DateTime, default=datetime.utcnow)
    key = db.Column(db.String)
    count = db.Column(db.Integer, default=0)

    def __init__(self, key):
        self.key = key
