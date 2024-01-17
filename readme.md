### Author

Yusheng

### Project Theme

wind conditions and forecast App

### Programming language

Python, NodeJs, Javascript

### Coding Infrastructure

Backend provide API(Model + controller)

Frontend provide View (React)

### Framework

prefer Flask,Django(requirement)

I go for Flask + React for backend and frontend
UI go for Antd 

### API Package

OpenWeather API. https://openweathermap.org/API#weather

### Data exchange format

I go for json

### Page Requirements

- Main view
- Detail view

### Main View Functions

- User can search and list locations towards to detailed page(search cities API)
    
    Similar Google homepage; Text box + search city below
    

### Detailed View Functions

- Display full/further forecast information about selected location
- The information must be clear, and navigation should be intuitive
- Custom user interface
- Some of the data may be better represented as images. (for example weather description, wind direction)

---

## API Definition

- Search City
- City Detail Page

### Search City

| URI | /city/search |
| --- | --- |
| Description | Search city by Weather API |
| Request Method | GET |

Request Params

| Name | Type | Description | Demo | Backup |
| --- | --- | --- | --- | --- |
| q | Varchar(255) | query city | London |  |
|  |  |  |  |  |

Response Params

| Name | Type | Description | Demo | Backup |
| --- | --- | --- | --- | --- |
| basic: Name | Varchar | City Name | London |  |
| basic: Lat | Float | Latitude | 38.42 |  |
| basic: Lon | Float | Longitude | -84.81 |  |
| basic: Country | Varchar |  | GB |  |
| basic: State | Varchar |  | England |  |
| detail: … |  |  |  | check https://openweathermap.org/api/one-call-3#other |

Response Demo

```json
{
"code": 0,
"data": {
"basic": {
	"country": "GB",
	"lat": 51.5073219,
	"lon": -0.1276474,
	"name": "London",
	"state": "England"
},
"detail": {
	"current": {},
	"daily": [...]
}
```

Request Curl:

```
curl https://api.openweathermap.org/data/3.0/onecall\?unit\=metric\&lat\=51.5073219\&lon\=-0.1276474\&\&appid\=d4397ecb1a81e1ca1c4d5b9ef1882ff3
```

---

### Developing keypoint

Weather User-Friendly Interface, Functions

### Waiting improve

1. PYTHON production WSGI(current version like demo)
2. Frontend code tidy
3. Add download option
4. Fuzzy city search
