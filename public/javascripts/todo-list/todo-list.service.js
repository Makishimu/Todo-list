angular.
    module('todoList').
    service('api', function ($http) {

    var self = this;
    
    self.addTodoListItem = function(todoListItem){
        $http.post('api/todoitems', todoListItem)
                .success(function (todoItemList) {
                })
                .error(function (err) {
                    console.log('Error ADD:' + err);
                });
        console.log('Add to DB -', todoListItem);
    };

    self.deleteTodoListItem = function(todoListItemId){
        $http.delete('/api/todoitems/' + todoListItemId)
                        .success(function (todoItemList) {
                            return todoItemList;
                        })
                        .error(function (err) {
                            console.log('Error DELETE');
                        });
        console.log('Delete from DB item with ID-', todoListItemId);
    };

});


