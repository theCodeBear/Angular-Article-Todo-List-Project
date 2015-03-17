angular.module('todo')

.controller('eachTodo', ['$scope', '$stateParams', '$rootScope', '$state', 'ListService', function($scope, $stateParams, $rootScope, $state, ListService) {

  document.getElementsByTagName("input")[0].focus();
  $scope.listTitle = $stateParams.title;
  $scope.lists = ListService.getList();


  $scope.createItem = function() {
    var alreadyExists = false;
    for (i in $scope.lists[$scope.listTitle]) {
      if ($scope.lists[$scope.listTitle][i] === $scope.item)
        alreadyExists = true;
    }
    if (!alreadyExists)
      $scope.lists[$scope.listTitle].push($scope.item);
    $scope.item = '';
    document.getElementById('todoItem').focus();
  };

  $scope.deleteItem = function(item) {
    var currentList = $scope.lists[$scope.listTitle];
    currentList.splice(currentList.indexOf(item), 1);
    ListService.saveList($scope.lists);
  };

  $scope.goBack = function() {
    $state.go($rootScope.home);
  };

}]);