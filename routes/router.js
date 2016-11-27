var express = require('express');
var todoItem = require('../models/todoItem');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo app' });
});

//get all list
router.get('/api/todoitems', function(req, res, next) {
  todoItem.find({},function (err, todoitems) {
    if (err) return res.send(400, err);
    res.json(todoitems);
  });
});

// create todoItem and send back all todoItems after creation
router.post('/api/todoitems', function(req, res, next) {
  todoItem.create({
    text: req.body.text,
    done: false
  },function (err, todoitem) {
    if (err) return res.send(400, err);
  });
});

// delete a todoItem
router.delete('/api/todoitems/:todoitem_id', function(req, res, next) {
  todoItem.remove({
        _id: req.params.todoitem_id
      },
      function (err, todoitem) {
        if (err) return res.send(400, err);
      });
});


module.exports = router;
