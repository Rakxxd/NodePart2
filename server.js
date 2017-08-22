const express = require('express');
var geolocation = require('geolocation')
const hbs = require('hbs');

const port = process.env.PORT || 3000 ;
var app = express();

app.set('view engine','hbs');
app.get('/',(req, res)=>{
   res.send('Hello Express!');
});

app.get('/about',(req,res)=>{
    res.render('about.hbs');
});

app.listen(port,()=>{
    console.log(port);
});