//configurações de Back-end neste Ficheiro - em JavaScript btw
/* eslint-disable no-unused-vars */
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.route('/')
  .get(function(req, res){
    res.render('home');
  });


const port = 3000;

app.listen(port, function(){
  console.log('Server started for Firespace WebSite on port 3000');
});