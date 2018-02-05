( function(){
'use strict';

angular.module('myApp.view1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', view1Controller);

  view1Controller.$inject = ["$http","$scope"];

  function view1Controller($http, $scope){
    $scope.email = 'test';
  }

})();