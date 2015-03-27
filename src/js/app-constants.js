app.constant('constProtocol', ['http', 'https']);
app.constant('constFileTypes', ['jpg', 'png', 'gif']);
app.constant('constClan', {
	"title":{
		"abbr":"SYWR",
		"plain":"Strike Your Way Raiders",
		"camel":"strikeYourWayRaiders",
		"underscore":"strike_your_way_raiders",
		"hyphen":"strike-your-way-raiders",
		"dot":"strike.your.way.raiders"
	},
	"description":"a way for friends to enjoy video games while not playing them",
	"crew":"Social Degenerate Nerds",
	"since":2014,
	"console":"Xbox",
	"id":519979
});
app.constant('constLogo', {
	"destiny":{
		"path":"lib/brands/destiny/",
		"alt":"Destiny Logo",
		"hz":{
			"bk":"Destiny_Logo_Horizontal_Black.png",
			"wh":"Destiny_Logo_Horizontal_White.png"
		},
		"st":{
			"bk":"Destiny_Logo_Stacked_Black.png", 
			"wh":"Destiny_Logo_Stacked_White.png"
		}
	},
	"bungie":{
		"path":"lib/brands/bungie/",
		"alt":"Bungie Logo",
		"hz":{
			"bk":"Destiny_Logo_Horizontal_Black.png",
			"wh":"Destiny_Logo_Horizontal_White.png"
		},
		"st":{
			"bk":"Destiny_Logo_Stacked_Black.png",
			"wh":"Destiny_Logo_Stacked_White.png"
		},
		"iconography":{
			"carnage":"iconography/Carnage_Zone.png",
			"lovedark":"iconography/Love_Bungie-dark.png",
			"lovelight":"iconography/Love_Bungie-light.png",
			"septagon":"iconography/Septagon.png",
			"shield":"iconography/Shield_Crest.png",
			"swordburst":"iconography/Swordburst_Crest.png"
		}
	}
});
// URLs that need to be covered by the constBungieUrl object:
// * URL - Clan
//     * http://www.bungie.net/en/Clan/Xbox/519979
// * URL - Member Profile
//     * http://www.bungie.net/en/Profile/254/3892477
// * API - Item Hash
//     * http://www.bungie.net/Platform/Destiny/Manifest/InventoryItem/3658182170
// * API - Clan
//     * http://www.bungie.net/Platform/Group/519979/MembersV3/?lc=en&fmt=true&lcin=true&currentPage=1
//     * http://www.bungie.net/Platform/Group/519979/Members/?lc=en&fmt=true&lcin=true&currentPage=1
// * API - Member Profile
//     * http://www.bungie.net/Platform/User/GetBungieNetUserById/8310647/?lc=en&fmt=true&lcin=true
app.constant('constBungieUrl', {
	"protocol": ['http', 'https'],
	"domain":"www.bungie.net",
	"lang":"en",
	"platform":"Platform",
	"destiny":"Destiny",
	"clan":"Clan",
	"console":"Xbox",
	"profile":"Profile"
	});