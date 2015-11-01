var app = angular.module('personalSite');

app.controller('mainCtrl', function( $scope ) {

	$scope.changePage = function( page ) {
		$scope.page = page;
	}


});
