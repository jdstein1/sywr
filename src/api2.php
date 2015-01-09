<!DOCTYPE html>
<html lang="en" ng-app>
<head>
	<title>Test API</title>
</head>
<body>
	<?php echo ''; ?> 
</body>
</html>

<?php

$request =  'http://www.bungie.net/Platform/Destiny/TigerXbox/Account/4611686018430431557/';
$json = file_get_contents($request);

echo htmlspecialchars($json, ENT_QUOTES);

?>
