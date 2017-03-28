// Angular code
(function () {

  angular.module("productApp").controller("productController", ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {
    $scope.product = new productObj();

    // $scope.genders= ["Man", "Woman"];
    // $scope.signIn.setGender($scope.genders[0]);
    // $scope.product.setSelectForm("option1");
    // $scope.product.setRadioType("Option 1");
    //
    //Scope varibles for cookies management
    $scope.generalName = "product";
    $scope.path = "/";
    // $scope.domain;
    // $scope.expires;
    // $scope.secure;
    //
    // //date picker variables
    // $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    // $scope.format = $scope.formats[0];
    //
    // $scope.dateOptions = {
    //   dateDisabled: "",
    //   formatYear: 'yyyy',
    //   maxDate: new Date(2020, 5, 22),
    //   minDate: new Date(),
    //   startingDay: 1
    // };
    //
    // $scope.dateToValidate = {
    //   opened: false
    // };
    //
    // $scope.openDateToValidate = function() {
    //   $scope.dateToValidate.opened = true;
    // };
    //

    this.submit = function () {
        createCookie();
            console.log($scope.product);

            $scope.product = new productObj();
            $scope.addProduct.$setPristine(); // Reset form
    };

    this.createCookie = function() {

      // Get the number of cookies untill now
      var nCookies = $cookies.get($scope.generalName, { path : $scope.path });

      // If this is the first cookie just initialize to 0
      if (isNaN(nCookies)) nCookies = 0;

      // We save the object with the generalName plus the number of cookies until now
      $cookies.putObject($scope.generalName + nCookies, $scope.product, { path : $scope.path });

      // We save each product
      $cookies.put($scope.generalName, parseInt(nCookies) + 1, { path : $scope.path });

    };
    //
    // // As we know the name of the cookie we can proceed by deleting each cookie by name
    // this.deleteCookies = function() {
    //   var nCookies = $cookies.get($scope.generalName, { path : $scope.path });
    //   // If this is the first cookie just initialize to 0
    //   if (isNaN(nCookies)) nCookies = 0;
    //   for (var i = 0; i < nCookies; i++) {
    //     $cookies.remove($scope.generalName + i, { path : $scope.path });
    //   }
    //   $cookies.remove($scope.generalName, { path : $scope.path });
    // };
    //
    // // We want to delete all cookies independent of the name
    // // http://stackoverflow.com/questions/26607856/how-to-remove-all-cookies-in-angularjs
    // this.deleteAllCookies = function () {
    //   var cookies = $cookies.getAll();
    //   angular.forEach(cookies, function (v, k) {
    //     $cookies.remove(k, { path : $scope.path });
    //   });
    // };
    //
    // this.showCookies = function () {
    //   //var nCookies = $cookies.getAll();
    //   var nCookies = $cookies.get($scope.generalName, { path : $scope.path });
    //   // If this is the first cookie just initialize to 0
    //   if (!isNaN(nCookies)) $window.open("view/popup/popUpwindow.html");
    //
    // };


  }]);
})();
