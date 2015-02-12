// c-members.js
(function() {
	'use strict';

	app.controller('cCharacterDetail', cCharacterDetail)
	function cCharacterDetail($scope, $http, $route, $location) {
		$scope.ctitle = 'cCharacterDetail';
		$scope.title = 'Player';
		console.log('START', $scope.ctitle);

		$scope.character = $route.current.params.character;
  		console.log('$scope.character',$scope.character );
  		console.log('$route.current.params.character',$route.current.params.character );

  		// $scope.player = sPlayerDetail.getMember();

		$http.get('api/'+$route.current.params.member+'.php')
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

		$scope.myCharacter = '';
		$scope.getMyCharacter = function (c) {
			console.log('$scope.getMyCharacter');
			if ($scope.myCharacter === '') {
				$scope.myCharacter = $scope.details.characters[c];
				console.log('$scope.myCharacter: ', $scope.myCharacter);
				return $scope.myCharacter;
			} else {
				return $scope.myCharacter;
			};
		};

		$scope.displayCharacter = function (index) {
			console.log('$scope.displayCharacter: ', index);
			console.log('$scope.displayCharacter $location: ', $location);
			console.log('$scope.displayCharacter $location.path(): ', $location.path());
			$scope.getMyCharacter(index);
			$location.path( '/players/' + $scope.member + '/characters/' + index );
			// return $location.path();
		};

		// $scope.compareCharacter = function (index) {
		// 	console.log('$scope.compareCharacter: ', index);
		// };

	}
	// console.log('test cCharacterDetail:', angular.module('app').controller('cCharacterDetail'));

})();
