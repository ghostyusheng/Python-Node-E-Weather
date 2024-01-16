from flask import Flask
from controller.city import CityController

app = Flask(__name__)

@app.route("/city/search")
def citySearch():
    return CityController.search()
