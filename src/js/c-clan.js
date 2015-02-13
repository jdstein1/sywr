/*c-clan.js*/
(function() {
	'use strict';

	app.controller('cClan', cClan)
	function cClan($scope, constProtocol, constBungieUrl, constClan) {
		$scope.ctitle = 'cClan';
		$scope.title = 'Clan';
		console.log('START', $scope.ctitle);

		$scope.metadata = constClan;

		$scope.myClanId = "519979";
		$scope.myClanUrl = constProtocol[0] + '://' + constBungieUrl.domain + '/' + constBungieUrl.lang + '/' + constBungieUrl.clan + '/' + constBungieUrl.console + '/' + $scope.myClanId;
		console.log('$scope.myClanUrl:', $scope.myClanUrl);

	}
	// console.log('test cClan:', angular.module('app').controller('cClan'));

})();
