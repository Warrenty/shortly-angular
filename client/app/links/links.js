angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  console.log($scope.data)
  $scope.getLinks = function(){
    Links.getLinks().then(function(uri) {
      $scope.data.links = uri;
    })
  };
  $scope.getLinks();
});
