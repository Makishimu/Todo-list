var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema creating
var todoItemSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

// Model creating
var todoItem = mongoose.model('todoItem', todoItemSchema);

module.exports = todoItem;