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
	function cClan($scope, constProtocol, constBungieUrl, constMeta) {
		$scope.ctitle = 'cClan';
		$scope.title = 'Clan';
		console.log('START', $scope.ctitle);

		$scope.metaData = constMeta;

		$scope.myClanId = "519979";
		$scope.myClanUrl = constProtocol[0] + '://' + constBungieUrl.domain + '/' + constBungieUrl.lang + '/' + constBungieUrl.clan + '/' + constBungieUrl.console + '/' + $scope.myClanId;
		console.log('$scope.myClanUrl:', $scope.myClanUrl);

	}
	// console.log('test cClan:', angular.module('app').controller('cClan'));


// })();
