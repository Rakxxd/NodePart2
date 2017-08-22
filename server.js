const express = require('express');
var geolocation = require('geolocation')
const hbs = require('hbs');

const port = process.env.PORT || 3000 ;
var app = express();

app.set('view engine','hbs');
app.get('/',(req, res)=>{
console.log('Hey There', new Date().toString());
   res.send('<h1>Hello Express!<h1>');
});

app.get('/about',(req,res)=>{
    res.render('about.hbs');
});

app.listen(port,()=>{
    console.log(port);
});