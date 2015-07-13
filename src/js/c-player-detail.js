// c-members.js
(function() {
	'use strict';

	app.controller('cPlayerDetail', cPlayerDetail)
	function cPlayerDetail($scope, $http, $route, $location, sPlayerDetail) {
		$scope.ctitle = 'cPlayerDetail';
		$scope.title = 'Player Details';
		console.log('START', $scope.ctitle);

		$scope.memberid = $route.current.params.player;
		console.log('$scope.memberid',$scope.memberid );
		console.log('$route.current.params.player',$route.current.params.player );

		console.log('sPlayerDetail.getMember($scope.memberid): ', sPlayerDetail.getMember($scope.memberid));

		// $scope.player = sPlayerDetail.getMember();

		// $http.get('api/'+$scope.memberid+'-destiny.php')
		$http({
		    url: "api/member-destiny.php",
		    method: "GET",
		    params: {membershipId: $scope.memberid}
		}).success(function (data) {
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
			// console.log('$scope.displayCharacter $location: ', $location);
			// console.log('$scope.displayCharacter $location.path(): ', $location.path());
			$scope.getMyCharacter(index);
			$location.path( '/player/' + $scope.memberid + '/character/' + index );
			// return $location.path();
		};

		// $scope.compareCharacter = function (index) {
		// 	console.log('$scope.compareCharacter: ', index);
		// };

	}
	// console.log('test cPlayerDetail:', angular.module('app').controller('cPlayerDetail'));

})();
