from flask import jsonify, request
from . import twitter

from .streamer import start_twitter_stream


from ..helpers import require_key

@twitter.route('/test', methods=['GET'])
def test():
    return jsonify( { 'data':'all good!' } ), 200

# http://localhost:5000/twitter/stream/start?key=233618409f3179a6a7db6aed92026a43
@twitter.route('/stream/start', methods=['GET'])
@require_key
def start_stream():
    start_twitter_stream()
    return jsonify( { 'data':'stream started' } ), 200