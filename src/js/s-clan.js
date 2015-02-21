/*s-members.js*/
(function() {
	'use strict';

	app.service('sClan', sClan)
	function sClan($http) {
		var stitle = 'sClan';
		console.log('START', stitle);

		var myClanId = 519979;

		var myData = {};
		// this.getClan = function() {
			$http.get('api/clan.php')
				.success(function (data) {
					console.log('sClan.getClan -- success');
					myData = data;
				}).error(function () {
					console.log('sClan.getClan -- error');
					// get backup data at /data/clan.json
					myData = 'no data';
				});
			return myData;
		// };
		// console.log('sClan', sClan);
		// return sClan;
		// return myData;
		// console.log('myData', myData);

	}
	// console.log('test sClan:', angular.module('app').service('sClan'));

})();
