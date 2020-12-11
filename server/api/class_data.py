from flask_restful import Resource
from flask_restful import request
from flask_restful import reqparse
import json

from db.swen_344_db_utils import *

class ClassData(Resource):
    def get(self, year, semester):
        selectSql = f"""SELECT class.name, class.description, class.units,
        class.grade, semester.name, year.number, study.degree FROM class
        INNER JOIN semester ON class.term_id=semester.id
        INNER JOIN year ON class.year_id=year.id
        INNER JOIN study ON class.study_id=study.id
        WHERE year.number='{year}' AND semester.name='{semester}'
        """
        return exec_get_all(selectSql)
