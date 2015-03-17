angular.module('todo', ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'home/home.html',
    controller: 'listOfTodos'
  })

  .state('list', {
    url: '/list/:title',
    templateUrl: 'list/list.html',
    controller: 'eachTodo'
  });

}]);