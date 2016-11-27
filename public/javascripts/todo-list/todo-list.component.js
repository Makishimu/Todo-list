angular.
    module('todoList', []).
    component('todoList', {
    templateUrl:'public/javascripts/todo-list/todo-list.template.html',
    controller: function todoListController(api, $http){
        var ctrl = this;

        ctrl.todoInput = '';
        // ctrl.todoItems = api.getTodoListItems();

        function getTodoListItems () {
            $http.get('/api/todoitems').then(function (response) {
                ctrl.todoItems = response.data;
            });
        }
        getTodoListItems();

        ctrl.todoAdd = function(){
            if(ctrl.todoInput.length){
                var pushingItem = {text:ctrl.todoInput, done: false};
                api.addTodoListItem(pushingItem);
                getTodoListItems();
                ctrl.todoInput="";
            }

        };
        ctrl.removeCompleted = function () {
            var oldList = ctrl.todoItems, deletList = [];
            ctrl.todoItems = [];
            angular.forEach(oldList, function(item){
                if(!item.done){
                    ctrl.todoItems.push(item);
                } else{
                    deletList.push(item);
                    api.deleteTodoListItem(item._id);
                }
            });
            
        };
    }
});