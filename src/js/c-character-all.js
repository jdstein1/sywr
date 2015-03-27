// c-members.js
(function() {
	'use strict';

	app.controller('cCharacterAll', cCharacterAll)
	function cCharacterAll($scope, $http, $route, $location) {
		$scope.ctitle = 'cCharacterAll';
		$scope.title = 'Player';
		console.log('START', $scope.ctitle);

		$scope.character = $route.current.params.character;
  		console.log('$scope.character',$scope.character );
  		console.log('$route.current.params.character',$route.current.params.character );

  		// $scope.player = sPlayerDetail.getMember();

		$http.get('api/'+$route.current.params.member+'-destiny.php')
			.success(function (data) {
			console.log('sPlayerDetail.getMember -- success');
			console.log('data: ', data);
			$scope.details = data.Response.data;
			console.log('$scope.details: ', $scope.details);
		}).error(function () {
			console.log('sPlayerDetail.getMember -- error');
			$scope.details = 'no data';
			console.log('$scope.details: ', $scope.details);
		});

	}
	// console.log('test cCharacterAll:', angular.module('app').controller('cCharacterAll'));

})();
