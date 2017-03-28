/**
 * @name mainController.js
 * @author Jean David Andrade Pazmiño / Aleix Velasco Calvo
 * @description Document that control the application.
 * @params none
 * @return none
 * @date //2017
 * @version v 1.0
 */
(function (){
	angular.module('magazineApp').controller('mainController', ['$scope', '$window', function($scope, $window) {

		$scope.showAction = 0; //Scope to show the templates

	}]);

	/**
	 * @name home
	 * @author Jean David Andrade Pazmiño / Aleix Velasco Calvo
	 * @description Template home.
	 * @params none
	 * @return none
	 * @date
	 * @version v 1.0
	 */
  angular.module('magazineApp').directive("home", function (){
    return {
      restrict: 'E',
      templateUrl:"view/templates/home.html",
      controller:function(){

	    },
	    controllerAs: 'home'
	  };
	});

	/**
	 * @name createUserForm
	 * @author Jean David Andrade Pazmiño / Aleix Velasco Calvo
	 * @description Template createUserForm.
	 * @params none
	 * @return none
	 * @date
	 * @version v 1.0
	 */
	  angular.module('magazineApp').directive("createUserForm", function (){
	    return {
	      restrict: 'E',
	      templateUrl:"view/templates/create-user-form.html",
	      controller:function(){

	      },
	      controllerAs: 'createUserForm'
	    };
	  });

		/**
		 * @name createArticleForm
		 * @author Jean David Andrade Pazmiño / Aleix Velasco Calvo
		 * @description Template createArticleForm.
		 * @params none
		 * @return none
		 * @date 9/3/2017
		 * @version v 1.0
		 */
		angular.module('magazineApp').directive("createArticleForm", function (){
			return {
				restrict: 'E',
				templateUrl:"view/templates/create-article-form.html",
				controller:function(){

				},
				controllerAs: 'createArticleForm'
			};
		});

		/**
		 * @name createCategoryForm
		 * @author Jean David Andrade Pazmiño / Aleix Velasco Calvo
		 * @description Template createCategoryForm.
		 * @params none
		 * @return none
		 * @date
		 * @version v 1.0
		 */
	  angular.module('magazineApp').directive("createCategoryForm", function (){
	    return {
	      restrict: 'E',
	      templateUrl:"view/templates/create-category-form.html",
	      controller:function(){

		    },
		    controllerAs: 'createCategoryForm'
		  };
		});

		/**
		 * @name createCardForm
		 * @author Jean David Andrade Pazmiño / Aleix Velasco Calvo
		 * @description Template createCardForm.
		 * @params none
		 * @return none
		 * @date
		 * @version v 1.0
		 */
	  angular.module('magazineApp').directive("createCardForm", function (){
	    return {
	      restrict: 'E',
	      templateUrl:"view/templates/create-card-form.html",
	      controller:function(){

		    },
		    controllerAs: 'createCardForm'
		  };
		});

})();
