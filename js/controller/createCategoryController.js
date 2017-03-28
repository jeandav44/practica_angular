/**
* @name showCategoryController.js
* @author Jean David Andrade Pazmiño
* @description Document that control the creation of a category
* @params none
* @return none
* @date 28/3/2017
* @version v 1.0
*/


//Angular code
(function (){
	angular.module("magazineApp").controller("createCategoryController", ['$scope', '$window', '$cookies', '$filter', function($scope, $window, $cookies, $filter) {

	$scope.category= new CategoryObj();
	$scope.generalName = "category";
	$scope.path = "/";


	this.submit = function() {
	this.createCookie();
	console.log($scope.category);
	$scope.category= new CategoryObj;
	$scope.createCategoryForm.$setPristine(); // Reset form
	}

	this.createCookie = function() {

	// Get the number of cookies untill now
	var nCookies = $cookies.get($scope.generalName, { path : $scope.path });

	// If this is the first cookie just initialize to 0
	if (isNaN(nCookies)) nCookies = 0;

	$scope.category.setId(nCookies);

	// We save the object with the generalName plus the number of cookies until now
	$cookies.putObject($scope.generalName + nCookies, $scope.category, { path : $scope.path });

	// We save each product
	$cookies.put($scope.generalName, parseInt(nCookies) + 1, { path : $scope.path });

};

	this.popUp = function(){
		window.open("view/popup/popUpCategory.html");
	}

	}]);
})();
