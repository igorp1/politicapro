import os

basedir = os.path.abspath(os.path.dirname(__file__))

class BaseConfig:
    SECRET_KEY = "233618409f3179a6a7db6aed92026a43"
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class DevConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(basedir, 'politicapro.db')

class TestConfig(BaseConfig):
    SECRET_KEY = 'TEST_KEY'
    PRESERVE_CONTEXT_ON_EXCEPTION = False
    TESTING = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(basedir, 'data-test.sqlite')

class ProdConfig(BaseConfig):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(basedir, 'politicapro.db')

configs = dict(
    dev = DevConfig,
    test = TestConfig,
    prod = ProdConfig
)