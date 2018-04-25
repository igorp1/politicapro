from flask import jsonify, request
from . import twitter

@twitter.route('/test', methods=['GET'])
def test():
    return jsonify( { 'data':'all good!' } ), 200