/*s-player-detail.js*/
(function() {
	'use strict';

	app.service('sPlayerDetail', sPlayerDetail)
	function sPlayerDetail($http, $route) {
		var stitle = 'sPlayerDetail';
		console.log('START', stitle);

		var myData = {};
		this.getMember = function() {
			$http.get('data/'+$route.current.params.member+'.php')
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
