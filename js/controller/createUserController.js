/**
 * @name createUserController.js
 * @author Jean David Andrade Pazmiño / Aleix Velasco Calvo
 * @description Document that control the create user.
 * @params none
 * @return none
 * @date //2017
 * @version v 1.0
 */
(function (){
	angular.module("magazineApp").controller("createUserController", ['$scope', '$window', '$cookies', '$filter', function($scope, $window, $cookies, $filter) {

    //Properties
    $scope.createUser = new userObj();
    $scope.generalName = "user";
    $scope.path = "/";

    //Scope variables
    $scope.rols= ["User", "Admin"];
    $scope.createUser.setRol($scope.rols[0]);

    /**
     * @name submit()
     * @author Aleix Velasco Calvo
     * @description Method to save the data into an object.
     * @params none
     * @return none
     * @date 24/2/2017
     * @version v 1.0
     */
    this.submit = function () {
      this.createCookie();
      console.log($scope.createUser);

      $scope.createUser = new userObj();
      $scope.createUserForm.$setPristine(); // Reset form
      $scope.createUser.setRol($scope.rols[0]);

      //$scope.showAction = 0; // Return to home
    };

    this.createCookie = function() {

      // Get the number of cookies untill now
      var nCookies = $cookies.get($scope.generalName, { path : $scope.path });

      // If this is the first cookie just initialize to 0
      if (isNaN(nCookies)) nCookies = 0;

      $scope.createUser.setNick(nCookies);

      // We save the object with the generalName plus the number of cookies until now
      $cookies.putObject($scope.generalName + nCookies, $scope.createUser, { path : $scope.path });

      // We save each product
      $cookies.put($scope.generalName, parseInt(nCookies) + 1, { path : $scope.path });

    };


		// this.showCookies = function () {
  //     //var nCookies = $cookies.getAll();
  //     var nCookies = $cookies.get($scope.generalName, { path : $scope.path });
  //     // If this is the first cookie just initialize to 0
  //     if (!isNaN(nCookies)) $window.open("view/popup/popUpwindow.html");

  //   };

		this.showUsers = function () {
			$window.open("view/popup/popUpUser.html");
		}

  }]);
})();
