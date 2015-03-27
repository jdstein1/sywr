// c-members.js
(function() {
	'use strict';

	app.controller('cPlayerDetail', cPlayerDetail)
	function cPlayerDetail($scope, $http, $route, $location, sPlayerDetail) {
		$scope.ctitle = 'cPlayerDetail';
		$scope.title = 'Player';
		console.log('START', $scope.ctitle);

		$scope.member = $route.current.params.member;
  		console.log('$scope.member',$scope.member );
  		console.log('$route.current.params.member',$route.current.params.member );

		console.log('sPlayerDetail.getMember($scope.member): ', sPlayerDetail.getMember($scope.member));

  		// $scope.player = sPlayerDetail.getMember();

		$http.get('api/'+$scope.member+'-destiny.php')
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
			$location.path( '/' + $scope.member + '/' + index );
			// return $location.path();
		};

		// $scope.compareCharacter = function (index) {
		// 	console.log('$scope.compareCharacter: ', index);
		// };

	}
	// console.log('test cPlayerDetail:', angular.module('app').controller('cPlayerDetail'));

})();
