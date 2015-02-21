/*s-items.js*/
(function() {
	'use strict';

	app.service('sDataItems', sDataItems)
	function sDataItems() {
		var stitle = 'sDataItems';
		console.log('START', stitle);

		var myItemData = [{}];
		console.log('myItemData: ', myItemData);

		return myItemData;
	}
	// console.log('test sDataItems:', angular.module('app').service('sDataItems'));

	app.service('sDataItemDetails', sDataItemDetails)
	function sDataItemDetails($http, $route, $scope) {
		var stitle = 'sDataItemDetails';
		console.log('START', stitle);

	}
	// console.log('test sDataItemDetails:', angular.module('app').service('sDataItemDetails'));

})();
