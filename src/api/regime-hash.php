<?php

$request =  'http://www.bungie.net/Platform/Destiny/Manifest/InventoryItem/119482465';
$json = file_get_contents($request);
header('Content-Type: application/json');
echo htmlspecialchars_decode($json, ENT_QUOTES);

?>
