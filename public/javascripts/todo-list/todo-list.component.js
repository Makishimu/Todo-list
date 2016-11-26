angular.
    module('todoList', []).
    component('todoList', {
    templateUrl:'public/javascripts/todo-list/todo-list.template.html',
    controller: function todoListController(api){
        var ctrl = this;

        ctrl.todoInput = '';
        ctrl.todoItems = api.getTodoListItems();
        ctrl.todoItems = [
            {
                text: 'first todo item',
                done: false
            }, {
                text: 'second todo item',
                done: false
            }, {
                text: 'third todo item',
                done: false
            }, {
                text: 'fourth todo item',
                done: false
            }, {
                text: 'fifth todo item',
                done: false
            }
        ];

        ctrl.todoAdd = function(){
            if(ctrl.todoInput.length){
                var pushingItem = {text:ctrl.todoInput, done: false};
                ctrl.todoItems.push(pushingItem);
                api.addTodoListItem(pushingItem);
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
                    api.deleteTodoListItem(item._id);  // Without DB item._id is undefined
                }
            });
            
        };
    }
});