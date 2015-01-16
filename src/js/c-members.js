/*c-members.js*/
(function() {
	'use strict';

	app.controller('cMembers', cMembers)
	function cMembers($scope, $http, $route, $location, constProtocol, constBungieUrl, sDataMembers) {
		$scope.ctitle = 'cMembers';
		$scope.title = 'Players';
		console.log('START', $scope.ctitle);

		console.log('constProtocol', constProtocol);
		console.log('constBungieUrl', constBungieUrl);

		// var myEmblemUrl = constProtocol[0] + '://' + constBungieUrl.domain +'/'+ constBungieUrl.lang +'/'+ constBungieUrl.profile + '/' + $scope.itemHash;
		// console.log('myEmblemUrl: ', myEmblemUrl);

		$scope.bungieImgPath = constProtocol[0] + '://' + constBungieUrl.domain;

		$scope.sortClass = {};
		$scope.sortClass.name = "def";
		$scope.sortClass.handle = "def";
		$scope.sortClass.id = "def";
		console.log('$scope.sortClass: ', $scope.sortClass);

		$scope.sortOrder = '-name';
		$scope.reverse = false;

		if ($scope.sortOrder) {
			console.log('$scope.sortOrder');
		} else {
			console.log('$scope.sortOrder');
		}

		$scope.sortOrderToggle = function (type) {
			console.log('sortOrderToggle:', type +'; type:'+ $scope.sortClass[type]);

			// for (var i = 0; i < $scope.sortClass.length; i++) {
			// console.log('$scope.sortClass[i]: ', $scope.sortClass[i]);
			// $scope.sortClass[i] = 'def';
			// };

			if (type === 'all') {
				$scope.sortClass = {name: "def", handle: "def", id: "def"};
			} else {
				if ($scope.sortClass[type] === 'des') {
					$scope.sortClass[type] = 'asc';
				} else {
					$scope.sortClass[type] = 'des';
				}
			}
			$scope.reverse=!$scope.reverse;
			console.log('$scope.sortClass: ', $scope.sortClass);
		};

		$scope.myMemberData = sDataMembers;
		// console.log('$scope.myMemberData: ', $scope.myMemberData);
		// console.log('$scope.myMemberData[1]: ', $scope.myMemberData[1]);

		for (var i = 0; i < $scope.myMemberData.length; i++) {
			var myMemberUrl = constProtocol[0] + '://' + constBungieUrl.domain +'/'+ constBungieUrl.lang +'/'+ constBungieUrl.profile + '/254/' + $scope.myMemberData[i].id;
			// console.log('myMemberUrl: ', myMemberUrl);
			$scope.myMemberData[i].url = myMemberUrl;
		};
		// console.log('$scope.myMemberData: ', $scope.myMemberData);

	}
	// console.log('test cMembers:', angular.module('app').controller('cMembers'));

	app.controller('cMemberDetail', cMemberDetail)
	function cMemberDetail($scope, $http, $route, $location, constProtocol, constBungieUrl, sDataMembers) {
		$scope.ctitle = 'cMemberDetail';
		$scope.title = 'Member:';
		console.log('START', $scope.ctitle);

  		console.log('$route.current.params',$route.current.params );
		$scope.member = $route.current.params.member;
  		console.log('$scope.member',$scope.member );

		// $http.get('data/api2.php')
		$http.get('data/'+$scope.member+'.php')
			.success(function (data) {
			console.log('sDataMemberDetails.getMember -- success');
			$scope.details = data.Response.data;
			console.log('$scope.details: ', $scope.details);
		}).error(function () {
			console.log('sDataMemberDetails.getMember -- error');
			$scope.details = 'no data';
			console.log('$scope.details: ', $scope.details);
		});

		// $scope.details = sDataMemberDetails;
		// $scope.details = sDataMemberDetails.getMember();
		// console.log('$scope.details[1]: ', $scope.details[1]);

	}
	// console.log('test cMemberDetail:', angular.module('app').controller('cMemberDetail'));

})();
