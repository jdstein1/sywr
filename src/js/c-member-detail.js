// c-members.js
(function() {
	'use strict';

	app.controller('cMemberDetail', cMemberDetail)
	function cMemberDetail($scope, $http, $route, $location, constProtocol, constBungieUrl, sMembers, sMemberDetail) {
		$scope.ctitle = 'cMemberDetail';
		$scope.title = 'Member:';
		console.log('START', $scope.ctitle);

  		// console.log('$route.current.params',$route.current.params );
		$scope.member = $route.current.params.member;
  		// console.log('$scope.member',$scope.member );

		// $http.get('data/api2.php')
		$http.get('data/'+$scope.member+'.php')
			.success(function (data) {
			console.log('sMemberDetail.getMember -- success');
			$scope.details = data.Response.data;
			console.log('$scope.details: ', $scope.details);
		}).error(function () {
			console.log('sMemberDetail.getMember -- error');
			$scope.details = 'no data';
			console.log('$scope.details: ', $scope.details);
		});

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

	}
	// console.log('test cMemberDetail:', angular.module('app').controller('cMemberDetail'));

})();
