 const data = require('./data.js');

const express = require('express');
const app = express();
const path = require('path');

const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('indexUser',data);
});

app.get('/users/:id', function(req, res) {
  // res.send("here");
  let id=(req.params.id);
  let user= data.users[id];
  res.render('idUser', user);
});

app.listen(3000, function () {
  console.log('User directory successfully started!!!');
});
