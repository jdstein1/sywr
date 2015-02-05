/*s-player-detail.js*/
(function() {
	'use strict';

	app.service('sPlayerDetail', sPlayerDetail)
	function sPlayerDetail() {
		var stitle = 'sPlayerDetail';
		console.log('START', stitle);

		var myData = {};
		var getMember = function() {
			$http.get('data/'+$route.current.params.member+'.php')
			// $http.get('data/api2.php')
				.success(function (data) {
					console.log('sPlayerDetail.getMember -- success');
					myData = data;
				}).error(function () {
					console.log('sPlayerDetail.getMember -- error');
					myData = 'no data';
				});
			return myData;
		};
		// console.log('sPlayerDetail', sPlayerDetail);
		// return sPlayerDetail;
		// return myData;
		// console.log('myData', myData);

	}
	// console.log('test sPlayerDetail:', angular.module('app').service('sPlayerDetail'));

})();
