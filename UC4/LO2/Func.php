<?php 

	// functions

	function sayHello($name = 'AJ ', $time = 'morning'){
		echo "Good $time, $name" . '<br />';
	}

	sayHello();
	sayHello('AJ ' );
	sayHello('LODS', 'night');

	function formatProduct($product){
		echo "{$product['name']} costs Php.{$product['price']} to buy <br />";
		return "The {$product['name']} costs Php.{$product['price']} to buy <br />";
	}
	
	formatProduct(['name' => 'WaweR', 'price' => 20]);

	$formatted = formatProduct(['name' => 'WaweR', 'price' => 20]);
	echo $formatted;

?>

<!DOCTYPE html>
<html>
<head>
	<title>L02 Assignments</title>
</head>
<body>
    <h1>L02 Functions</h1>
</body>
</html>