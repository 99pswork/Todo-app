// TODO
/*
{
    title: string
    description: string
    completed: bool
}
 */
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://99pswork:0cDUpVn1gmyAbNt2@cluster-test.niq5cjf.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}