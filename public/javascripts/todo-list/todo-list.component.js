angular.
    module('todoList', []).
    component('todoList', {
    templateUrl:'public/javascripts/todo-list/todo-list.template.html',
    controller: function todoListController(){
        var ctrl = this;

        ctrl.todoInput = '';

        //TODO: GET http to DB to get todoItems (create factory and add 'id' field to DB model)
        ctrl.todoItems = [
            {
                text: 'first todo item',
                done: true
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
                done: true
            }
        ];

        ctrl.todoAdd = function(){
            if(ctrl.todoInput.length){
                ctrl.todoItems.push({text:ctrl.todoInput, done: false});
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
                    deletList.push(item)
                }
            });
            //TODO: DELETE http to DB with deletList (in forEach loop?)
            
        };
    }
});