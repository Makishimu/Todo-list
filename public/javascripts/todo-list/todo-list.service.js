angular.
    module('todoList').
    service('api', function () {

        this.getTodoListItems = function() {
            // $http.get('api/todoitems')
            //     .success(function (todoItemList) {
            //         console.log('LIST ITEMS ---', todoItemList);
            //         return todoItemList
            //     })
            //     .error(function (err) {
            //         console.log('Error GET:' + err);
            //     });
            console.log('Get list items here!!!');
        };
    
        this.addTodoListItem = function(todoListItem){
            // $http.post('api/todoitems', todoListItem)
            //         .success(function (todoItemList) {
            //             console.log('LIST ITEMS ---', todoItemList);
            //             return todoItemList
            //         })
            //         .error(function (err) {
            //             console.log('Error ADD:' + err);
            //         });
            console.log('Add to DB -', todoListItem);
        };
    
        this.deleteTodoListItem = function(todoListItemId){
            // $http.delete('/api/todoitems' + todoListItemId)
            //                 .success(function (todoItemList) {
            //                     console.log('LIST ITEMS in delete process ---', todoItemList);
            //                     return todoItemList;
            //                 })
            //                 .error(function (err) {
            //                     console.log('Error DELETE');
            //                 });
            console.log('Delete from DB item with ID-', todoListItemId);
        };
});


