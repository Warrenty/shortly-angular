angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  // Your code here
  console.log("TESTTTTTT", Links);
  $scope.data = {};
  $scope.getLinks = function(){
    $http.get('/api/links').
      success(function(data, status, headers, config) {
        $scope.data.links = data;
    });
  }
  $scope.getLinks();
});
