//Angular code
(function (){
	angular.module("cookiesApp").controller("showProductsController", ['$scope', '$window', '$cookies', '$filter', function($scope, $window, $cookies, $filter) {
		$scope.productsArray = [];
		$scope.productsArrayAux = [];

		$scope.cookie = new productObj();
		$scope.totalPrice = 0;
		$scope.editInput=[];

		//Pagination variables
		$scope.pageSize = 5;
		$scope.currentPage = 1;
		$scope.filteredData;

		//Scope varibles for cookies management
		$scope.generalName = "consum";
		$scope.path = "/";
		$scope.domain;
		$scope.expires;
		$scope.secure;

    // Load the cookies into objects
    this.loadCookies = function () {
      var cookies = $cookies.getAll();
      angular.forEach(cookies, function (value, key) {
          // Check the cookie is not the global one
          if (key != $scope.generalName) {
              var product = new productObj();
              // As the cookie cames as an string we convert it to object
              product.cookieToObj(JSON.parse(value));
              $scope.productsArray.push(product);
              $scope.editInput.push(false);
              //console.log(product);
          }
      });
    };
		//modifies the cookie
    this.modifyCookie = function (index){
        if($scope.editInput[index]) {
          $scope.editInput[index]=false;
          // modify the cookie
          $cookies.putObject($scope.generalName + index,
            $scope.productsArray[index], {path : $scope.path});
        }
        else {
          $scope.editInput[index]=true;
        }
    }

	}]);

	angular.module("cookiesApp").directive("cookieInformation", function (){
		return {
		  restrict: 'E',
		  templateUrl:"../templates/cookie-information.html",
		  controller:function(){

		  },
		  controllerAs: 'cookieInformation'
		};
	});
})();
