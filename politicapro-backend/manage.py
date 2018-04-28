import os
from politicapro.helpers import get_current_env
from politicapro import db, build_app
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

# Import models
from politicapro.models import TweetCount, Tweet

# Build app
CONFIG_NAME = get_current_env()
app = build_app(CONFIG_NAME)

# setup manager
manager = Manager(app)
migrate = Migrate(app, db)

manager.add_command('db', MigrateCommand)

if __name__ == "__main__":
    manager.run()