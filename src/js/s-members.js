/*s-members.js*/
(function() {
	'use strict';

	app.service('sDataMembers', sDataMembers)
	function sDataMembers() {
		var stitle = 'sDataMembers';
		console.log('START', stitle);

		var myMemberData = [{
			"id":"8310647",
			"handle":"SarcasticWatchr",
			"name":"Jeff"
		},{
			"id":"7037048",
			"handle":"Spacewolf 024",
			"name":"John"
		},{
			"id":"7666141",
			"handle":"kras07",
			"name":"Kras"
		},{
			"id":"3892477",
			"handle":"Tanman2391",
			"name":"Tanner"
		}];

		for (var i = 0; i < myMemberData.length; i++) {
			myMemberData[i].api = myMemberData[i].name.toLowerCase();

		};
		console.log('myMemberData: ', myMemberData);

		return myMemberData;
	}
	// console.log('test sDataMembers:', angular.module('app').service('sDataMembers'));

	app.service('sDataMemberDetails', sDataMemberDetails)
	function sDataMemberDetails($http, $route, $scope) {
		var stitle = 'sDataMemberDetails';
		console.log('START', stitle);

		// var myData = {};

		//Gets the list of nuclear weapons
		// $scope.getMember = function() {
		// 	// $http.get('members/'+$route.current.params.member+'.php')
		// 	$http.get('api2.php')
		// 		.success(function (data) {
		// 			console.log('sDataMemberDetails.getMember -- success');
		// 			myData = data;
		// 		}).error(function () {
		// 			console.log('sDataMemberDetails.getMember -- error');
		// 			myData = 'no data';
		// 		});
		// 	return myData;
		// };
		// console.log('sDataMemberDetails', sDataMemberDetails);
		// return sDataMemberDetails;
        // return myData;
		// console.log('myData', myData);

	}
	// console.log('test sDataMemberDetails:', angular.module('app').service('sDataMemberDetails'));

})();
