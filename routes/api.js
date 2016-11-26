var express = require('express');
var mongoose = require('mongoose');
var todoItem = require('../models/todoItem');
var router = express.Router();

//TODO: CRITICAL Fix router incorrect 'router' using  

// get all todoItems
router.get('/api/todoitems', function(req, res, next) {
   todoItem.find(function (err, todoitems) {
       if (err) res.send(err);
       res.json(todoitems);
   });
    next();
});

// create todoItem and send back all todoItems after creation
router.route('/api/todoitems').get(function(req, res, next) {
    todoItem.create({
        text: req.body.text,
        done: false
    },function (err, todoitem) {
        if (err) res.send(err);
        
        todoItem.find(function(err, todoitems){
            if (err) res.send(err);
            res.json(todoitems);
        });
    });
});

// delete a todoItem
router.delete('/api/todoitems/:todoitem_id', function(req, res, next) {
    todoItem.remove({
        _id: req.params.todo_id
    },
        function (err, todoitem) {
        if (err) res.send(err);

        todoItem.find(function(err, todoitems){
            if (err) res.send(err);
            res.json(todoitems);
        });
    });
    next();
});

module.exports = router;
