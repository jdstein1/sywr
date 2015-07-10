/*s-members.js*/
(function() {
	'use strict';

	app.service('sPlayers', sPlayers)
	function sPlayers() {
		var stitle = 'sPlayers';
		console.log('START', stitle);

		var myMemberData = [{
			"name":"Jeff",
			"id":{
				"profile":8310647,
				"member":4611686018438629701
			},
			"handle":"SarcasticWatchr",
			"rank":2,
			"github":"jdstein1",
			"blog":"http://dragonize.wordpress.com/"
		},{
			"name":"John",
			"id":{
				"profile":7037048,
				"member":4611686018430431557
			},
			"handle":"Spacewolf 024",
			"rank":3,
			"github":"spacewolf024",
			"blog":"http://www.blogspot.com/"
		},{
			"name":"Kras",
			"id":{
				"profile":7666141,
				"member":4611686018438009209
			},
			"handle":"kras07",
			"rank":3,
			"github":"Krasio07",
			"blog":"http://kweek13.blogspot.com/"
		},{
			"name":"Vikas",
			"id":{
				"profile":8162353,
				"member":4611686018439072542
			},
			"handle":"SameMussel62767",
			"rank":1,
			"github":"vikaschoudhry",
			"blog":"http://www.blogspot.com/"
		},{
			"name":"Tanner",
			"id":{
				"profile":3892477,
				"member":4611686018429615609
			},
			"handle":"Tanman2391",
			"rank":4,
			"github":"tanman2391",
			"blog":"http://www.blogspot.com/"
		},{
			"name":"Kaleb",
			"id":{
				"profile":9856625,
				"member":4611686018442935061
			},
			"handle":"SassiestLeech10",
			"rank":0,
			"github":"kmroggenkamp",
			"blog":"http://www.blogspot.com/"
		}];

		for (var i = 0; i < myMemberData.length; i++) {
			myMemberData[i].api = myMemberData[i].name.toLowerCase();

		};

		// console.log('myMemberData: ', myMemberData);
		return myMemberData;
	}
	// console.log('test sPlayers:', angular.module('app').service('sPlayers'));

})();
