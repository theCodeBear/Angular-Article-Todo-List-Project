angular.module('todo')

.controller('listOfTodos', ['$scope', '$location', '$rootScope', 'ListService', function($scope, $location, $rootScope, ListService) {

  document.getElementsByTagName("input")[0].focus();
  $scope.lists = ListService.getList();

  $scope.createList = function() {
    if (!!$scope.viewTitle !== false) {
      $scope.lists[$scope.viewTitle] = [];
      $scope.viewTitle = '';
    }
    document.getElementById('todoTitle').focus();
    ListService.saveList($scope.lists);
  };

  $scope.gotoList = function(title) {
    $rootScope.home = 'home';
    $location.path('/list/' + title);
  };

  $scope.deleteList = function(title) {
    delete $scope.lists[title];
    ListService.saveList($scope.lists);
  };

}]);