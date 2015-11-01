angular.module('personalSite')
.controller('techCtrl', function( $scope, $http, techs ) {

	$scope.technologies = techs;

	$scope.submitTech = function() {
		$http.post('/api/suggest-tech', { name: $scope.suggestedTech })
			.then(function( response ) {
				$http.get('/api/techs')
					.then(function( response ) {
						$scope.technologies = response.data;
					})
				$scope.suggestedTech = '';
			});
	}
});