# TODO

Things left to do in order to make this a decent protfolio piece:


## Build Manager

#### [] Assigned to:  ???

We will soon use a build system ( [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/) ) to do the following:

* Run JSHint/JSLint on scripts
* Minify JS
* Convert LessCSS to CSS


## Custom Icons

#### [] Assigned to:  Jeff

Create a set of icons for specific games and their symbols for character classes, acheivements, mission types, etc.


## Multiple API call

#### [] Assigned to:  Kras & John

Pass more than one account ID or character ID in order to populate a player/character comparison page.


## Link to Clan & Profile pages

#### [X] Assigned to Jeff

### Bungie/Destiny URLs

* Clan
	* [http://www.bungie.net/en/Clan/Xbox/519979](http://www.bungie.net/en/Clan/Xbox/519979)
* Member Profile
	* [http://www.bungie.net/en/Profile/254/3892477](http://www.bungie.net/en/Profile/254/3892477)

### Bungie/Destiny APIs


## Use API to populate Clan pages

#### [] Assigned to Jeff

* Clan info API
	* [http://www.bungie.net/Platform/Group/519979/MembersV3/?lc=en&fmt=true&lcin=true&currentPage=1](http://www.bungie.net/Platform/Group/519979/MembersV3/?lc=en&fmt=true&lcin=true&currentPage=1)
	* [http://www.bungie.net/Platform/Group/519979/Members/?lc=en&fmt=true&lcin=true&currentPage=1](http://www.bungie.net/Platform/Group/519979/Members/?lc=en&fmt=true&lcin=true&currentPage=1)


## Use API to populate Player pages

#### [X] Assigned to Jeff

* Player info API
	* [http://www.bungie.net/Platform/User/GetBungieNetUserById/8310647/?lc=en&fmt=true&lcin=true](http://www.bungie.net/Platform/User/GetBungieNetUserById/8310647/?lc=en&fmt=true&lcin=true)


## Use API to populate Activity pages

#### [] Assigned to Kras

### Bungie/Destiny Activity History APIs:

* Story
	* [http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=2&count=20&page=0&definitions=true](http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=2&count=20&page=0&definitions=true)
* Strike
	* [http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=18&count=20&page=0&definitions=true](http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=18&count=20&page=0&definitions=true)
* Raid
	* [http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=4&count=20&page=0&definitions=true](http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=4&count=20&page=0&definitions=true)
* Crucible & Medals
	* [http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=5&count=20&page=0&definitions=true](http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=5&count=20&page=0&definitions=true)
* Patrol
	* [http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=6&count=20&page=0&definitions=true](http://www.bungie.net/Platform/Destiny/Stats/ActivityHistory/1/4611686018438629701/2305843009240408744/?lc=en&fmt=true&lcin=true&mode=6&count=20&page=0&definitions=true)



## Hash Converter

#### [] Assigned to:  Tanner

Make a local JSON record of most common hash conversions.  For example:

	{"hashes":[
		{"classes":[
			{2271682572:"Warlock"},
			{3655393761:"Hunter"},
			{671679327:"Titan"}
		]},{"genders":[
			{83748743296:"female"},
			{78435673543:"male"}
		]}
	]}

## Item Info Lookup

#### [] Assigned to:  John

Use this API to look up inventory item data:

* Item info API
	* [http://www.bungie.net/Platform/Destiny/Manifest/InventoryItem/3658182170](http://www.bungie.net/Platform/Destiny/Manifest/InventoryItem/3658182170)
