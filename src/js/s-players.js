/*s-members.js*/
(function() {
	'use strict';

	app.service('sPlayers', sPlayers)
	function sPlayers() {
		var stitle = 'sPlayers';
		console.log('START', stitle);

		// var myData = {};
		// this.getMember = function() {
		// 	$http.get('data/'+$route.current.params.member+'.php')
		// 		.success(function (data) {
		// 			console.log('sPlayerDetail.getMember -- success');
		// 			myData = data;
		// 		}).error(function () {
		// 			console.log('sPlayerDetail.getMember -- error');
		// 			myData = 'no data';
		// 		});
		// 	return myData;
		// };
		// console.log('sPlayerDetail', sPlayerDetail);
		// return sPlayerDetail;
		// return myData;
		// console.log('myData', myData);

		var myMemberData = [{
			"id":"8310647",
			"handle":"SarcasticWatchr",
			"rank":2,
			"name":"Jeff",
			"github":"jdstein1",
			"blog":"http://dragonize.wordpress.com/"
		},{
			"id":"7037048",
			"handle":"Spacewolf 024",
			"rank":3,
			"name":"John",
			"github":"spacewolf024",
			"blog":"http://www.blogspot.com/"
		},{
			"id":"7666141",
			"handle":"kras07",
			"rank":3,
			"name":"Kras",
			"github":"Krasio07",
			"blog":"http://kweek13.blogspot.com/"
		},{
			"id":"8162353",
			"handle":"SameMussel62767",
			"rank":1,
			"name":"Vikas",
			"github":"",
			"blog":"http://www.blogspot.com/"
		},{
			"id":"3892477",
			"handle":"Tanman2391",
			"rank":4,
			"name":"Tanner",
			"github":"tanman2391",
			"blog":"http://www.blogspot.com/"
		},{
			"id":"9856625",
			"handle":"SassiestLeech10",
			"rank":0,
			"name":"Kaleb",
			"github":"",
			"blog":"http://www.blogspot.com/"
		}];

		for (var i = 0; i < myMemberData.length; i++) {
			myMemberData[i].api = myMemberData[i].name.toLowerCase();

		};

		console.log('myMemberData: ', myMemberData);
		return myMemberData;
	}
	// console.log('test sPlayers:', angular.module('app').service('sPlayers'));

})();
