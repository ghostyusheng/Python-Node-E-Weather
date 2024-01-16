import requests
import json
from service.base import BaseService
from core.engine import Engine

class CityService(BaseService):

    def searchByName(self, name):
        uri = Engine.geocodingURI.format(CITY=name)
        r = requests.get(uri)
        res = json.loads(r.content)[0]
        if res.get('local_names'):
            del res['local_names']
        return res
