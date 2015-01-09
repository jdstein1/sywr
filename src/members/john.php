<html>
 <head>
  <title>Clan:SYWR - Game:Destiny - Member:John</title>
 </head>
 <body>
 <h3>Clan:SYWR - Game:Destiny - Member:John</h3>
 <?php echo '<h2>Destiny Stats</h2>'; ?> 
 </body>
</html>



<?php

$request =  'http://www.bungie.net/Platform/Destiny/TigerXbox/Account/4611686018430431557/';
$json = file_get_contents($request);

echo htmlspecialchars($json, ENT_QUOTES);

?>
