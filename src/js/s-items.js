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

		// var myData = {};

		//Gets the list of nuclear weapons
		// $scope.getMember = function() {
		// 	// $http.get('members/'+$route.current.params.member+'.php')
		// 	$http.get('api2.php')
		// 		.success(function (data) {
		// 			console.log('sDataItemDetails.getMember -- success');
		// 			myData = data;
		// 		}).error(function () {
		// 			console.log('sDataItemDetails.getMember -- error');
		// 			myData = 'no data';
		// 		});
		// 	return myData;
		// };
		// console.log('sDataItemDetails', sDataItemDetails);
		// return sDataItemDetails;
        // return myData;
		// console.log('myData', myData);

	}
	// console.log('test sDataItemDetails:', angular.module('app').service('sDataItemDetails'));

})();
