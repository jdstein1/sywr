// c-clan.js
(function() {
	'use strict';

	app.controller('cClan', cClan)

	function cClan($rootScope, $scope, $http, constProtocol, constBungieUrl, constClan) {
		$scope.ctitle = 'cClan';
		$scope.title = 'Clan';
		console.log('START', $scope.ctitle);

		$scope.itemUserFilter = '';

		$scope.constClan = constClan;
		$scope.myClanUrl = constProtocol[0] + '://' + constBungieUrl.domain + '/' + constBungieUrl.lang + '/' + constBungieUrl.clan + '/' + constBungieUrl.console + '/' + $scope.constClan.id;

		$http.get('data/medals.json')
			.success(function (data) {
			console.log('medals -- success');
			console.log('medals data: ', data);
			$scope.dataMedals = data.medals;
			console.log('medals $scope.dataMedals: ', $scope.dataMedals);
		}).error(function () {
			console.log('medals -- error');
		});

		var extra = {};
		$scope.convertId = function (id) {
			// console.log('START convertId id: ',id);
			switch (id) {
				case '8310647':
						extra.name = 'Jeff';
						extra.github = "jdstein1";
						extra.medals = ["boomer-duty","3x32"];
					break;
				case '7037048':
						extra.name = 'John';
						extra.github = "spacewolf024";
						extra.medals = ["raid-crota-solo"];
					break;
				case '7666141':
						extra.name = 'Kras';
						extra.github = "Krasio07";
						extra.medals = ["raid-crota-solo","3x32"];
					break;
				case '8162353':
						extra.name = 'Vikas';
						extra.github = "vikaschoudhry";
						extra.medals = ["ghost"];
					break;
				case '3892477':
						extra.name = 'Tanner';
						extra.github = "tanman2391";
						extra.medals = ["pvp-rage"];
					break;
				case '9856625':
						extra.name = 'Kaleb';
						extra.github = "kmroggenkamp";
						extra.medals = ["fast-learner"];
					break;
				default:
					break;
			}
			// console.log('convertId name: ',name);
			return extra;
		};

		// $scope.sClan = sClan;
	    // $scope.dataClan = sClan.getClan();

		// var callClan = function () {
		// 	console.log('START callClan()');
		// 	// $scope.sClan.getClan();
		// 	$scope.sClan.getClan(function (data) {
		// 		console.log('data 1:', data);
		// 		console.log('$scope.dataClan 1:', $scope.dataClan);
		// 		$scope.dataClan = data;
		// 		return $scope.dataClan;
		// 	});
		// 	console.log('$scope.dataClan 2:', $scope.dataClan);
		// 	// console.log('$scope.sClan.getClan():', $scope.sClan.getClan());
		// };
		// callClan();

		$http.get('api/clan.php')
			.success(function (data) {
			console.log('sPlayerDetail.getMember -- success');
			console.log('data: ', data);

			$rootScope.clanLength = data.Response.results.length;
			console.log('$rootScope.clanLength: ', $rootScope.clanLength);

			// moment.locale('en-ca');

			// 2015-02-09T19:19:25.37Z -- bungie date format
			// YYYY-MM-DDTHH:mm:ssZ -- moment.js default format
			// dddd, MMMM Do YYYY, h:mm:ss a -- pretty date format
			// dddd, MMMM Do YYYY, HH:mm:ss ZZ -- JDS date format

			// var nowPretty = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
			// console.log('nowPretty ---- '+ nowPretty);

			// var nowSimple = moment().format();
			// console.log('nowSimple ---- '+ nowSimple);

			// var nowISO = moment().toISOString();
			// console.log('nowISO ---- '+ nowISO);

			// var nowISO2 = moment().add(moment().utcOffset()/60,'hours').format();
			// console.log('nowISO2 ---- '+ nowISO2);

			// console.log('UTC offset ---- '+ moment().utcOffset());
			// console.log('UTC offset hours ---- '+ moment().utcOffset()/60);

			for (var i = data.Response.results.length - 1; i >= 0; i--) {

				// Add extra manually derived values to clan data...
				// var myExtra = $scope.convertId(data.Response.results[i].membershipId);
				// data.Response.results[i].user.name = myExtra.name;
				// data.Response.results[i].user.api = myExtra.name.toLowerCase();
				// data.Response.results[i].user.github = myExtra.github;
				// data.Response.results[i].user.medals = myExtra.medals;

				// Dynamically generate user's color...

				// METHOD 1
				// Based on an arbitrary initial value, the color for each memeber is assigned by dividing the color wheel into n (n = number of members = length of clan array) equal slices and using the color at each degree value.
				// Set initial RGBa color:
				var userColorDefaultRGBa = {
					type:'rgba', 
					r:255, 
					g:149, 
					b:0, 
					a:0.5
				};
				// console.log('xyz userColorDefaultRGBa: ', userColorDefaultRGBa);
				// Set initial HSLa color:
				var userColorDefaultHSLa = {
					type:'hsla', 
					h:35, 
					s:100, 
					l:50, 
					a:0.5
				};
				// console.log('xyz userColorDefaultHSLa: ', userColorDefaultHSLa);
				// Spin color around the color wheel:
				var colorSpin = function (t,n) {
					console.log('pdq colorSpin -- t:'+t+' // n:'+n);
					if (t === 'rgba') {
						// console.log('pdq rgba');
						n = n + ((255/$rootScope.clanLength) * i);
						if (n > 255) {
							n = n - 255;
							console.log('pdq rgba over');
						} else {
							console.log('pdq rgba under');
						}
					} else if (t === 'hsla') {
						// console.log('pdq hsla');
						n = n + ((360/$rootScope.clanLength) * i);
						if (n > 360) {
							n = n - 360;
							console.log('pdq hsla over');
						} else {
							console.log('pdq hsla under');
						}
					} else {
						console.log('pdq error');
					};
					// console.log('c: ', c);
					console.log('n: ', Math.floor(n));
					return Math.floor(n);
					// return n;
				};
				// console.log('xyz colorSpin: ', colorSpin(75));
				// Make color string in CSS format:
				var colorMake = function (c) {
					console.log('START colorMake: ', c);
					switch (c.type) {
						case "rgba":
							console.log('type:  RGBa --', c.type);
							data.Response.results[i].user.userColor = ''+c.type+
								'('+colorSpin(c.type,c.r)+
								','+colorSpin(c.type,c.g)+
								','+colorSpin(c.type,c.b)+
								','+c.a+')';
							break;
						case "hsla":
							console.log('type:  HSLa --', c.type);
							data.Response.results[i].user.userColor = ''+c.type+
								'('+colorSpin(c.type,c.h)+
								','+c.s+
								'%,'+c.l+
								'%,'+c.a+')';
							break;
						default:
							console.log('type:  MISC --', c.type);
					}
					// console.log('data.Response.results['+i+'].user.userColor: ', data.Response.results[i].user.userColor);
					return data.Response.results[i].user.userColor;
				};
				// console.log('xyz colorMake RGBa: ', colorMake(userColorDefaultRGBa));
				// colorMake(userColorDefaultRGBa);
				// console.log('xyz colorMake HSLa: ', colorMake(userColorDefaultHSLa));
				colorMake(userColorDefaultHSLa);

				// METHOD 2
				// Use memberId as seed for color.

				// Handle avatar pictures that have relative and non-relative paths...
				if (data.Response.results[i].user.profilePicturePath) {
					var avatar = data.Response.results[i].user.profilePicturePath;
					// console.log(data.Response.results[i].user.profilePicturePath);
					if (avatar.indexOf('http') >= 0) {
						data.Response.results[i].user.avatarRelative = false;
					} else {
						data.Response.results[i].user.avatarRelative = true;
					}
				} else {
					return false;
				}

				// convert APPROVAL date using moment.js:
				data.Response.results[i].approvalDateISO = moment(data.Response.results[i].approvalDate).toISOString();
				data.Response.results[i].approvalDatePretty = moment(data.Response.results[i].approvalDate).format('MMM Do YYYY');
				data.Response.results[i].approvalDateVerbose = moment(data.Response.results[i].approvalDate).format('dddd, MMMM Do YYYY, HH:mm:ss ZZ');

				// convert FIRST ACCESS date using moment.js:
				data.Response.results[i].user.firstAccessISO = moment(data.Response.results[i].user.firstAccess).toISOString();
				data.Response.results[i].user.firstAccessPretty = moment(data.Response.results[i].user.firstAccess).format('MMM Do YYYY');
				data.Response.results[i].user.firstAccessVerbose = moment(data.Response.results[i].user.firstAccess).format('dddd, MMMM Do YYYY, HH:mm:ss ZZ');

				// convert LAST UPDATE date using moment.js:
				data.Response.results[i].user.lastUpdateISO = moment(data.Response.results[i].user.lastUpdate).toISOString();
				data.Response.results[i].user.lastUpdatePretty = moment(data.Response.results[i].user.lastUpdate).format('MMM Do YYYY');
				data.Response.results[i].user.lastUpdateVerbose = moment(data.Response.results[i].user.lastUpdate).format('dddd, MMMM Do YYYY, HH:mm:ss ZZ');

			};

			$scope.dataClan = data.Response.results;
			console.log('$scope.dataClan: ', $scope.dataClan);
		}).error(function () {
			console.log('sPlayerDetail.getMember -- error');

			$scope.dataClan = '';
			console.log('$scope.dataClan: ', $scope.dataClan);
		});

	}
	// console.log('test cClan:', angular.module('app').controller('cClan'));

})();
