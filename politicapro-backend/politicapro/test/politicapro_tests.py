from flask_testing import TestCase
from flask import url_for, jsonify
import os
import json

import politicapro

from sqlalchemy import desc

class PoliticaProTestCase(TestCase):

    # SETUP/TEARDOWN
    def create_app(self):
        os.environ["APP_ENV"] = "test"
        return politicapro.build_app("test")

    def setUp(self):
        self.db = politicapro.db
        self.db.create_all()

    def tearDown(self):
        os.environ["APP_ENV"] = "dev"
        politicapro.db.session.remove()
        politicapro.db.drop_all()

    # TESTS
    def test_1(self):
        assert True == True
         



        

        

    