angular.module('signUp.controller', [])

.controller('signUpCtrl', function($scope, $stateParams, $rootScope, $location) {

  $scope.user = {
  	title: '', 
  	firstName: '', 
  	lastName: '', 
  	email: '', 
  	username: '', 
  	password: '',
  	passwordVerified: ''};

  $scope.userList = [];

  $scope.signUp = function (user){

	  	console.log($scope.user);
	  	$scope.userList.push(user);
	  	console.log($scope.userList);

  	


  }

});