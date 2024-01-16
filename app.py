from flask import Flask 
from controller.city import CityController
from core.engine import Engine

Engine.boot()
app = Flask(__name__)

@app.route("/city/search")
def citySearch():
    return CityController.search()
