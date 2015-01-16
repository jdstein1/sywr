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

	app.controller('cMemberDetail', cMemberDetail)
	function cMemberDetail($scope, $http, $route, $location, constProtocol, constBungieUrl, sDataMembers) {
		$scope.ctitle = 'cMemberDetail';
		$scope.title = 'Member:';
		console.log('START', $scope.ctitle);

  		// console.log('$route.current.params',$route.current.params );
		$scope.member = $route.current.params.member;
  		// console.log('$scope.member',$scope.member );

		// $http.get('data/api2.php')
		$http.get('data/'+$scope.member+'.php')
			.success(function (data) {
			console.log('sDataMemberDetails.getMember -- success');
			$scope.details = data.Response.data;
			// console.log('$scope.details: ', $scope.details);
		}).error(function () {
			console.log('sDataMemberDetails.getMember -- error');
			// $scope.details = 'no data';
		});
			console.log('$scope.details: ', $scope.details);

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
	console.log('START getCharBackgroundPath');
	// var backgroundPath = $scope.details.characters[i].backgroundPath;
	// Response.data.characters[i].backgroundPath
	// http://www.bungie.net/common/destiny_content/icons/b491d0f19048e1bb9fa4dbd70c2b4346.jpg
	// http://www.bungie.net/common/destiny_content/icons/780a86ed4beb6022b776490ccd0ffd2f.jpg
	var path = constBungieUrl.protocol[0] + '://' + constBungieUrl.domain + file;
	return path;
};

		// $scope.details = sDataMemberDetails;
		// $scope.details = sDataMemberDetails.getMember();
		// console.log('$scope.details[1]: ', $scope.details[1]);

	}
	// console.log('test cMemberDetail:', angular.module('app').controller('cMemberDetail'));

})();
