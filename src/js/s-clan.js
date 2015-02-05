/*s-members.js*/
(function() {
	'use strict';

	app.service('sPlayers', sPlayers)
	function sPlayers() {
		var stitle = 'sPlayers';
		console.log('START', stitle);

		var myData = {};
		var getClan = function() {
			$http.get('data/clan.php')
			// $http.get('data/api2.php')
				.success(function (data) {
					console.log('sPlayerDetail.getClan -- success');
					myData = data;
				}).error(function () {
					console.log('sPlayerDetail.getClan -- error');
					// get backup data at /data/backup/clan.json
					myData = 'no data';
				});
			return myData;
		};
		// console.log('sPlayerDetail', sPlayerDetail);
		// return sPlayerDetail;
		// return myData;
		// console.log('myData', myData);

		var myMemberData = [{
			"id":"8310647",
			"handle":"SarcasticWatchr",
			"name":"Jeff",
			"github":"jdstein1",
			"website":"http://dragonize.wordpress.com/"
		},{
			"id":"7037048",
			"handle":"Spacewolf 024",
			"name":"John",
			"github":"spacewolf024",
			"website":"http://www.blogspot.com/"
		},{
			"id":"7666141",
			"handle":"kras07",
			"name":"Kras",
			"github":"Krasio07",
			"website":"http://kweek13.blogspot.com/"
		},{
			"id":"3892477",
			"handle":"Tanman2391",
			"name":"Tanner",
			"github":"tanman2391",
			"website":"http://www.blogspot.com/"
		}];

		for (var i = 0; i < myMemberData.length; i++) {
			myMemberData[i].api = myMemberData[i].name.toLowerCase();

		};

		console.log('myMemberData: ', myMemberData);
		return myMemberData;
	}
	// console.log('test sPlayers:', angular.module('app').service('sPlayers'));

})();
