from flask import Flask 
from flask import render_template
from gevent import pywsgi
from controller.city import CityController
from core.engine import Engine

Engine.boot()
app = Flask(__name__)

@app.route("/proxy/city/search")
def citySearch():
    return CityController.search()


@app.route('/version2')
def hello_world():
    return render_template('index.html')


if __name__ == '__main__':
    server = pywsgi.WSGIServer(('0.0.0.0',5001),app)
    server.serve_forever()
