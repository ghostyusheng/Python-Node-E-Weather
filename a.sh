export APP_ID="d4397ecb1a81e1ca1c4d5b9ef1882ff3"
#curl https://api.openweathermap.org/data/3.0/onecall\?lat\=-20\&lon\=20\&\&appid\=d4397ecb1a81e1ca1c4d5b9ef1882ff3
#curl https://api.openweathermap.org/data/3.0/onecall\?lat\=51.5073219\&lon\=-0.1276474\&\&appid\=${APP_ID}

# city -> coordinate
curl "http://api.openweathermap.org/geo/1.0/direct?q=new&appid=${APP_ID}"
