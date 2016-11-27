angular.
    module('todoList').
    service('api', function ($http) {

    var self = this;

    // self.getTodoListItems = function() {
    //         $http.get('/api/todoitems')
    //             .then(function (todoItemList) {
    //                 console.log('LIST ITEMS ---', todoItemList.data);
    //                 return self.items = todoItemList.data;
    //             });
    //  };
    
    self.addTodoListItem = function(todoListItem){
        $http.post('api/todoitems', todoListItem)
                .success(function (todoItemList) {
                    console.log('LIST ITEMS (add) ---', todoItemList);
                })
                .error(function (err) {
                    console.log('Error ADD:' + err);
                });
        console.log('Add to DB -', todoListItem);
    };

    self.deleteTodoListItem = function(todoListItemId){
        $http.delete('/api/todoitems/' + todoListItemId)
                        .success(function (todoItemList) {
                            console.log('LIST ITEMS in delete process ---', todoItemList);
                            return todoItemList;
                        })
                        .error(function (err) {
                            console.log('Error DELETE');
                        });
        console.log('Delete from DB item with ID-', todoListItemId);
    };

    return self
});


