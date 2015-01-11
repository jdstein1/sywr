/*clan.js*/
// (function() {
// 	'use strict';

	app.service('sDataClan', sDataClan)
	function sDataClan() {
		var stitle = 'sDataClan';
		console.log('START', stitle);

		var DataDestiny = ['test1', 'test2', 'test3']

		return DataDestiny;
	}
	// console.log('test sDataClan:', angular.module('app').service('sDataClan'));

	app.controller('cClan', cClan)
	function cClan($scope, sBungieUrl) {
		$scope.ctitle = 'cClan';
		$scope.title = 'Clan';
		console.log('START', $scope.ctitle);

		$scope.BungieUrl = sBungieUrl;
		console.log('$scope.BungieUrl', $scope.BungieUrl);

		$scope.myClanId = "519979";
		$scope.myClanUrl = $scope.BungieUrl.protocol[0] + '://' + $scope.BungieUrl.domain + '/' + $scope.BungieUrl.lang + '/' + $scope.BungieUrl.clan + '/' + $scope.BungieUrl.platform + '/' + $scope.myClanId;
		console.log('$scope.myClanUrl:', $scope.myClanUrl);

	}
	// console.log('test cClan:', angular.module('app').controller('cClan'));


// })();
