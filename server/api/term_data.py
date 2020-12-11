from flask_restful import Resource
from flask_restful import request
from flask_restful import reqparse
import json

from db.swen_344_db_utils import *

class TermData(Resource):
    def get(self):
        list = []
        years = exec_get_all("SELECT number FROM year")
        semesters = exec_get_all("SELECT name FROM semester")
        list.append(years)
        list.append(semesters)
        return list