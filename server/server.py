from flask import Flask
from flask_restful import Resource, Api

from db.swen_344_db_utils import *
from api.class_data import *
from api.study_data import *
from api.term_data import *

app = Flask(__name__) #create Flask instance

api = Api(app) #api router

api.add_resource(ClassData, '/classData/<year>/<semester>')
api.add_resource(StudyData, '/studyData')
api.add_resource(TermData, '/termData')

if __name__ == '__main__':
    print("Loading db")
    exec_sql_file('classData.sql')
    print("Starting flask")
    app.run(debug=True), #starts Flask



    