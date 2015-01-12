/*members.js*/
// (function() {
// 	'use strict';

	app.service('sDataMembers', sDataMembers)
	function sDataMembers() {
		var stitle = 'sDataMembers';
		console.log('START', stitle);

		var myMemberData = [{
			"id":"8310647",
			"handle":"SarcasticWatchr",
			"name":"Jeff"
		},{
			"id":"7037048",
			"handle":"Spacewolf 024",
			"name":"John"
		},{
			"id":"7666141",
			"handle":"kras07",
			"name":"Kras"
		},{
			"id":"3892477",
			"handle":"Tanman2391",
			"name":"Tanner"
		}];
		console.log('myMemberData: ', myMemberData);

		return myMemberData;
	}
	// console.log('test sDataMembers:', angular.module('app').service('sDataMembers'));

	app.controller('cMembers', cMembers)
	function cMembers($scope, constProtocol, constBungieUrl, sDataMembers) {
	// function cMembers($scope, sBungieUrl, sDataMembers) {
		$scope.ctitle = 'cMembers';
		$scope.title = 'Members';
		console.log('START', $scope.ctitle);

		$scope.sortClass = {};
		$scope.sortClass.name = "def";
		$scope.sortClass.handle = "def";
		$scope.sortClass.id = "def";

		$scope.myMemberData = sDataMembers;
		// console.log('$scope.myMemberData: ', $scope.myMemberData);
		// console.log('$scope.myMemberData[1]: ', $scope.myMemberData[1]);

		$scope.myMemberOrder = '-name';
		$scope.reverse = false;

		if ($scope.myMemberOrder) {
			console.log('$scope.myMemberOrder');
		} else {
			console.log('$scope.myMemberOrder');
		}

		$scope.myMemberOrderToggle = function (type) {
			console.log('myMemberOrderToggle:', type +'; type:'+ $scope.sortClass[type]);

			// for (var i = 0; i < $scope.sortClass.length; i++) {
			// 	console.log('$scope.sortClass[i]: ', $scope.sortClass[i]);
			// 	$scope.sortClass[i] = 'def';
			// };

			if ($scope.sortClass[type] === 'des') {
				$scope.sortClass[type] = 'asc';
			} else {
				$scope.sortClass[type] = 'des';
			}
			$scope.reverse=!$scope.reverse;
			console.log('$scope.sortClass: ', $scope.sortClass);
		};

		$scope.myMembersUrls = [];

		for (var i = 0; i < $scope.myMemberData.length; i++) {
			var myMemberUrl = constProtocol[0] + '://' + constBungieUrl.domain +'/'+ constBungieUrl.lang +'/'+ constBungieUrl.profile + '/254/' + $scope.myMemberData[i].id;
			// console.log('myMemberUrl: ', myMemberUrl);
			$scope.myMemberData[i].url = myMemberUrl;
		};
		// console.log('$scope.myMemberData: ', $scope.myMemberData);
	}
	// console.log('test cMembers:', angular.module('app').controller('cMembers'));

// })();