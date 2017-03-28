//Angular code
(function (){
	angular.module("magazineApp").controller("showUserController", ['$scope', '$window', '$cookies', '$filter', function($scope, $window, $cookies, $filter) {
		$scope.userArray = [];
		$scope.editInput=[];


		$scope.createUser = new userObj();
		$scope.generalName = "user";
		$scope.path = "/";

    // Load the cookies into objects
    this.loadCookies = function () {
      var cookies = $cookies.getAll();
      angular.forEach(cookies, function (value, key) {
          // Check the cookie is not the global one
          if (key != $scope.generalName) {
              var createUser = new userObj();
              // As the cookie cames as an string we convert it to object
              createUser.cookieToObj(JSON.parse(value));
              $scope.userArray.push(createUser);
              console.log(createUser);
          }
      });
    };

		this.removeCookie = function(remove){

		$cookies.remove($scope.generalName + remove, { path : $scope.path });
		location.reload();

	}

	// angular.module("magazineApp").directive("cookieInformation", function (){
	// 	return {
	// 	  restrict: 'E',
	// 	  templateUrl:"../templates/cookie-information.html",
	// 	  controller:function(){
	// 	  },
	// 	  controllerAs: 'cookieInformation'
	// 	};
	// });

}]);
})();
