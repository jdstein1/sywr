<!DOCTYPE html>
<html lang="en">
<head>
	<title>Clan:SYWR - Game:Destiny - Member:Kras</title>
</head>
<body>
	<?php echo ''; ?> 
</body>
</html>

<?php

$request =  'http://www.bungie.net/Platform/Destiny/TigerXbox/Account/4611686018438009209/';
$json = file_get_contents($request);

echo htmlspecialchars($json, ENT_QUOTES);

?>
