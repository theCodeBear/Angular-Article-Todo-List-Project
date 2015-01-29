angular.module('todo', ['ngRoute', 'todo.controllers'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/main.html',
      controller: 'listOfTodos'
    }).
    when('/list/:title', {
      templateUrl: '/templates/list.html',
      controller: 'listOfTodos'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);
