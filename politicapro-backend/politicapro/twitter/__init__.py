from flask import Blueprint

twitter = Blueprint('twitter', __name__)

from . import api