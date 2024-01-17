var express = require('express');
var app = express();
var path = require('path');
var engines = require('consolidate');

const proxy = require("http-proxy-middleware").createProxyMiddleware;

const BASE_DIR = __dirname

const print = (what) => {
    return console.log(what)
}

app.use(
  "/",
  proxy([`/proxy/**`], { target: `http://127.0.0.1:5001` })
);



app.set('views', path.join(BASE_DIR + '/build'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');


app.get('/', function (req, res) {
  res.render('index.html');
});


app.get('/bundle.js', function (req, res) {
  res.sendFile(BASE_DIR + '/build/bundle.js');
});

app.get('/*.css', function (req, res) {
  res.sendFile(BASE_DIR + '/src/*.js');
});

console.log(BASE_DIR);



app.use(express.static(BASE_DIR + '/asset/pic'));



app.get('/dist', function (req, res) {
  res.sendFile(BASE_DIR + '/dist/index.html');
});
app.get('/dist/script.js', function (req, res) {
  res.sendFile(BASE_DIR + '/dist/script.js');
});

app.get('/dist/style.css', function (req, res) {
  res.sendFile(BASE_DIR + '/dist/style.css');
});

app.use(express.static(BASE_DIR + '/dist'));


app.get('/test', function (req, res) {
  res.send('Hello World!');
});


app.listen(3001, function () {
  console.log('backend listening on port 3001!');
});
