var express = require('express'); //Use require to call express from package.json

//Create our app
var app = express(); //Call express library as a function

app.use(express.static('public')); //Expose the public designated folder for the server

//Starrt the server for port 3000
app.listen(3000, function(){
    console.log("Express server is up on port 3000");
})