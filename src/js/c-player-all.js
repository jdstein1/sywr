// c-members.js
(function() {
	'use strict';

	app.controller('cPlayerAll', cPlayerAll)
	function cPlayerAll($scope, $http, $route, $location, constProtocol, constBungieUrl, constLogo, sPlayers) {
		$scope.ctitle = 'cPlayerAll';
		console.log('START', $scope.ctitle);
		$scope.title = 'All Players';
		$scope.description = 'All Players';

		// console.log('$scope.meta.icon', $scope.meta.icon);

		// var myEmblemUrl = constProtocol[0] + '://' + constBungieUrl.domain +'/'+ constBungieUrl.lang +'/'+ constBungieUrl.profile + '/' + $scope.itemHash;
		// console.log('myEmblemUrl: ', myEmblemUrl);

		$scope.bungieImgPath = constProtocol[0] + '://' + constBungieUrl.domain;

		$scope.constLogo = constLogo;

		$scope.members = sPlayers;
		// console.log('$scope.members: ', $scope.members);
		// console.log('$scope.members[1]: ', $scope.members[1]);

		for (var i = 0; i < $scope.members.length; i++) {
			// Generate URLs for Bungie Profile
			var myMemberUrl = constProtocol[0] + '://' + constBungieUrl.domain +'/'+ constBungieUrl.lang +'/'+ constBungieUrl.profile + '/254/' + $scope.members[i].id;
			// Generate URLs for GitHub
			// var myGithubUrl = constProtocol[0] + '://' + constBungieUrl.domain +'/'+ constBungieUrl.lang +'/'+ constBungieUrl.profile + '/254/' + $scope.members[i].id;
			$scope.members[i].url = myMemberUrl;
		};
		// console.log('$scope.members: ', $scope.members);

		$scope.getImgPath = function (type,id) {
			console.log('START getImgPath');
			var urlBase = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
			switch (type) {
				case 'avatar':
					var urlPath = 'img/profile/avatars/';
					break;
				case 'background':
					var urlPath = 'img/UserThemes/';
					break;
				default:
					var urlPath = 'img/';
					break;
			}
			return urlBase + urlPath + imgPath;
		};

		$scope.getCharImgPath = function (file) {
			// console.log('START getCharBackgroundPath');
			// var backgroundPath = $scope.details.characters[i].backgroundPath;
			// Response.data.characters[i].backgroundPath
			// http://www.bungie.net/common/destiny_content/icons/b491d0f19048e1bb9fa4dbd70c2b4346.jpg
			// http://www.bungie.net/common/destiny_content/icons/780a86ed4beb6022b776490ccd0ffd2f.jpg
			var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + file;
			return path;
		};

		$scope.getPlayerBackgroundPath = function (id) {
			console.log('START getPlayerBackgroundPath');
			// http://www.bungie.net/img/UserThemes/Destiny3/header.jpg
			var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
			return path;
		};
		$scope.getPlayerAvatarPath = function (id) {
			console.log('START getPlayerAvatarPath');
			// http://www.bungie.net/img/profile/avatars/bungieday_10.jpg
			var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + '/';
			return path;
		};

	}
	// console.log('test cPlayerAll:', angular.module('app').controller('cPlayerAll'));

})();
