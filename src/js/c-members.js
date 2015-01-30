// c-members.js
(function() {
	'use strict';

	app.controller('cMembers', cMembers)
	function cMembers($scope, $http, $route, $location, constProtocol, constBungieUrl, sMembers) {
		$scope.ctitle = 'cMembers';
		$scope.title = 'Players';
		console.log('START', $scope.ctitle);

		console.log('constProtocol', constProtocol);
		console.log('constBungieUrl', constBungieUrl);

		// var myEmblemUrl = constProtocol[0] + '://' + constBungieUrl.domain +'/'+ constBungieUrl.lang +'/'+ constBungieUrl.profile + '/' + $scope.itemHash;
		// console.log('myEmblemUrl: ', myEmblemUrl);

		$scope.bungieImgPath = constProtocol[0] + '://' + constBungieUrl.domain;

		$scope.members = sMembers;
		// console.log('$scope.members: ', $scope.members);
		// console.log('$scope.members[1]: ', $scope.members[1]);

		for (var i = 0; i < $scope.members.length; i++) {
			var myMemberUrl = constProtocol[0] + '://' + constBungieUrl.domain +'/'+ constBungieUrl.lang +'/'+ constBungieUrl.profile + '/254/' + $scope.members[i].id;
			// console.log('myMemberUrl: ', myMemberUrl);
			$scope.members[i].url = myMemberUrl;
		};
		// console.log('$scope.members: ', $scope.members);

		$scope.getPlayerBackgroundPath = function (id) {
			console.log('START getPlayerBackgroundPath');
			// http://www.bungie.net/img/UserThemes/Destiny1/header.jpg
			// http://www.bungie.net/img/UserThemes/Destiny3/header.jpg
			var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
			return path;
		};
		$scope.getPlayerAvatarPath = function (id) {
			console.log('START getPlayerAvatarPath');
			// http://www.bungie.net/img/profile/avatars/bungieday_13.jpg
			// http://www.bungie.net/img/profile/avatars/bungieday_10.jpg
			var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
			return path;
		};

	}
	// console.log('test cMembers:', angular.module('app').controller('cMembers'));

})();
