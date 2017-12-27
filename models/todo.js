// Logic to create todo schema

var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank'
    }, 
     completed: {
        type: Boolean,
        default: false
    }, 
     created_date: {
        type: String,
        default: Date.now
    } 
});

//compile into a model
//capital T is the standard
var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;



//name
//completed
//created_date
