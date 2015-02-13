// main.js

// connecting the ng-app module in index.html to the module here, and
// assigning it to a variable named app.

angular.module("todo")

.service('ListService', function() {

  this.list = {};

  this.getList = function() { return this.list; };
  this.saveList = function(list) { this.list = list; };

})

// the controller for the list of todo lists
.controller("listOfTodos", ["$scope", "$location", "$routeParams", "ListService", function($scope, $location, $routeParams, ListService) {
  document.getElementsByTagName("input")[0].focus();
  $scope.lists = ListService.getList();

  $scope.createList = function() {
    if (!!$scope.viewTitle !== false) {
      $scope.lists[$scope.viewTitle] = [];
      $scope.viewTitle = "";
    }
    console.log($scope.lists);
    document.getElementById("todoTitle").focus();
    ListService.saveList($scope.lists);
  };

  $scope.deleteList = function(title) {
    delete $scope.lists[title];
    ListService.saveList($scope.lists);
  };

  $scope.gotoList = function(title) {
    $location.path("/list/"+title);
  };



  // stuff for list.html template

  $scope.listTitle = $routeParams.title;

  console.log($scope.lists);

  $scope.createItem = function() {
    $scope.lists[$scope.listTitle].push($scope.item);
    console.log($scope.lists);
    $scope.item = "";
    document.getElementById("todoItem").focus();
  }

  $scope.deleteItem = function(item) {
    var currentList = $scope.lists[$scope.listTitle];
    console.log("item: " + item + ", type: " + typeof(item));
    console.log("index: " + $scope.lists[$scope.listTitle].indexOf(item));
    console.log("array: " + $scope.lists[$scope.listTitle]);
    currentList.splice(currentList.indexOf(item), 1);
    ListService.saveList($scope.lists);
  }

}]);
