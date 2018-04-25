from .configs import configs
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# =====
# DB
db = SQLAlchemy()

# =====
# App factory \0o0/
def build_app(config_name):

    app = Flask(__name__)
    app.config.from_object( configs[config_name] )

    # CORS
    CORS(app)

    # DB
    db.init_app(app)

    # Blueprints
    from .docs import docs as docs_blueprint
    app.register_blueprint(docs_blueprint) 

    from .twitter import twitter as twitter_blueprint
    app.register_blueprint(twitter_blueprint, url_prefix="/twitter")

    return app

