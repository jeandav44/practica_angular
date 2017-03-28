/**
* @name showCategoryController.js
* @author Jean David Andrade Pazmiño
* @description Document that control the creation of a card
* @params none
* @return none
* @date 28/3/2017
* @version v 1.0
*/


//Angular code
(function (){
	angular.module("magazineApp").controller("createCardController", ['$scope', '$window', '$cookies', '$filter', function($scope, $window, $cookies, $filter) {

		$scope.card= new CardObj();
		$scope.generalName = "card";
		$scope.path = "/";

		$scope.option=["Terror","Comedy","Anime"];

		$scope.card.setGenre($scope.option[0]);

		this.submit = function() {
		this.createCookie();
		console.log($scope.card);
		$scope.card= new CardObj;
		$scope.card.setGenre($scope.option[0]);
		$scope.createCardForm.$setPristine(); // Reset form
		}




		this.createCookie = function() {

			// Get the number of cookies untill now
			var nCookies = $cookies.get($scope.generalName, { path : $scope.path });

			// If this is the first cookie just initialize to 0
			if (isNaN(nCookies)) nCookies = 0;

			var d = new Date();
			$scope.card.setId(nCookies);
			$scope.card.setDate(d);

			// We save the object with the generalName plus the number of cookies until now
			$cookies.putObject($scope.generalName + nCookies, $scope.card, { path : $scope.path });

			// We save each product
			$cookies.put($scope.generalName, parseInt(nCookies) + 1, { path : $scope.path });

	};

	this.popUp = function(){
		window.open("view/popup/popUpCard.html");
	}

	}]);
})();
