from flask_restful import Resource
from flask_restful import request
from flask_restful import reqparse
import json
from decimal import *

from db.swen_344_db_utils import *

class StudyData(Resource):
    def get(self):
        return exec_get_all("SELECT * FROM study")