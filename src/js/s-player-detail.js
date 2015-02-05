/*s-members.js*/
(function() {
	'use strict';

	app.service('sMemberDetail', sMemberDetail)
	function sMemberDetail() {
		var stitle = 'sMemberDetail';
		console.log('START', stitle);

		var myData = {};
		var getMember = function() {
			$http.get('data/'+$route.current.params.member+'.php')
			// $http.get('data/api2.php')
				.success(function (data) {
					console.log('sMemberDetail.getMember -- success');
					myData = data;
				}).error(function () {
					console.log('sMemberDetail.getMember -- error');
					myData = 'no data';
				});
			return myData;
		};
		// console.log('sMemberDetail', sMemberDetail);
		// return sMemberDetail;
        // return myData;
		// console.log('myData', myData);

	}
	// console.log('test sMemberDetail:', angular.module('app').service('sMemberDetail'));

})();
