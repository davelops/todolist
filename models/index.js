//with mongodb installed now we connect to it

var mongoose = require('mongoose');
//this connects mongoose to database
//set debug so we can see whats happening
mongoose.set('debug', true);
//connect to database server. The server can be called whatever you want or have. 
//this one is called todo-api
mongoose.connect('mongodb://localhost/todo-api', {useMongoClient: true});


//allows us to use promise syntax
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");