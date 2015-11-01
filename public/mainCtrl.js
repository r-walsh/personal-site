var app = angular.module('personalSite');

app.controller('mainCtrl', function( $scope, $state ) {

	$scope.changePage = function( page ) {
		$scope.page = page;
	}


});
