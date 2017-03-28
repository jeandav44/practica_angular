/**
 * @name showCardController.js
 * @author Jean David Andrade Pazmiño
 * @description Document that control the template to cookes card
 * @params none
 * @return none
 * @date 28/3/2017
 * @version v 1.0
 */

//Angular code
(function (){
	angular.module("magazineApp").controller("showCardController", ['$scope', '$window', '$cookies', '$filter', function($scope, $window, $cookies, $filter) {
		$scope.productsArray = [];

		$scope.card= new CardObj();
		$scope.generalName = "card";
		$scope.path = "/";

    // Load the cookies into objects
    this.loadCookies = function () {
      //  var cookies = $cookies.getAll();
			var cookies = [];

			var nCookies = $cookies.get($scope.generalName, { path : $scope.path });

					for (var i = 0; i < nCookies; i++) {
					if ($cookies.get($scope.generalName + i, { path : $scope.path })!=null) {
							 cookies.push($cookies.get($scope.generalName + i, { path : $scope.path }));
						 }
					}

      angular.forEach(cookies, function (value, key) {
          // Check the cookie is not the global one
          if (key != $scope.generalName) {
              var card = new CardObj();
              // As the cookie cames as an string we convert it to object
              card.cookieToObj(JSON.parse(value));
              $scope.productsArray.push(card);
              console.log(card);
          }
      });
    };
		//removes the cookie with the given id
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
