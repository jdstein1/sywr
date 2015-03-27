// c-members.js
(function() {
	'use strict';

	app.controller('cCharacterDetail', cCharacterDetail)
	function cCharacterDetail($scope, $http, $route, $location) {
		$scope.ctitle = 'cCharacterDetail';
		$scope.title = 'Player';
		console.log('START', $scope.ctitle);

		$scope.member = $route.current.params.member;
  		// console.log('$scope.member',$scope.member );

		$scope.character = $route.current.params.character;
  		// console.log('$scope.character',$scope.character );

  		// $scope.player = sPlayerDetail.getMember();

		$http.get('api/'+$scope.member+'-destiny.php')
			.success(function (data) {
			console.log('sPlayerDetail.getMember -- success');
			// console.log('data: ', data);
			$scope.details = data.Response.data;
			// console.log('$scope.details: ', $scope.details);
			// console.log('$scope.details.characters[1]: ', $scope.details.characters[1]);
			$scope.myCharacter = $scope.details.characters[$scope.character];
			// console.log('$scope.myCharacter: ', $scope.myCharacter);
		}).error(function () {
			console.log('sPlayerDetail.getMember -- error');
			$scope.details = 'no data';
			// console.log('$scope.details: ', $scope.details);
		});

		// $scope.getMyCharacter = function (c) {
		// 	console.log('$scope.getMyCharacter');
		// 	if ($scope.myCharacter === '') {
		// 		$scope.myCharacter = $scope.details.characters[c];
		// 		console.log('$scope.myCharacter: ', $scope.myCharacter);
		// 		return $scope.myCharacter;
		// 	} else {
		// 		return $scope.myCharacter;
		// 	};
		// };

	}
	// console.log('test cCharacterDetail:', angular.module('app').controller('cCharacterDetail'));

})();
