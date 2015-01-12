/*common.js*/
// (function() {
// 	'use strict';

	app.service('sBungieUrl', sBungieUrl)
	function sBungieUrl(bungieUrl) {
		var stitle = 'sBungieUrl';
		console.log('START', stitle);

		// var bungieUrl = {
		// "domain":"www.bungie.net",
		// "lang":"en",
		// "clan":"Clan",
		// "platform":"Xbox",
		// "profile":"Profile"
		// };
		// console.log('bungieUrl:', bungieUrl);
		// console.log('bungieUrl.domain:', bungieUrl.domain);
		// console.log('bungieUrl.protocol:', bungieUrl.protocol);
		// console.log('bungieUrl.protocol[1]:', bungieUrl.protocol[1]);

		return bungieUrl;
	}
	// console.log('test sBungieUrl:', angular.module('app').service('sBungieUrl'));

	app.service('sDataDestiny', sDataDestiny)
	function sDataDestiny() {
		var stitle = 'sDataDestiny';
		console.log('START', stitle);

		var DataDestiny = ['test1', 'test2', 'test3']

		return DataDestiny;
	}
	// console.log('test sDataDestiny:', angular.module('app').service('sDataDestiny'));

	app.controller('cMain', cMain)
	function cMain($scope, sDataDestiny) {
		$scope.ctitle = 'cMain';
		$scope.title = 'Home';
		console.log('START', $scope.ctitle);

		$scope.DataDestiny = sDataDestiny;
		console.log('$scope.DataDestiny', $scope.DataDestiny);
	}
	// console.log('test cMain:', angular.module('app').controller('cMain'));

// })();
