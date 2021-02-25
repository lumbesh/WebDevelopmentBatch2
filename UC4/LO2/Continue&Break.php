<?php 

	// continue and break //
	
	$products = [
        ['name' => 'paa', 'price' => 20],
		['name' => 'tuhod', 'price' => 10],
		['name' => 'balikat', 'price' => 15],
		['name' => 'itlog', 'price' => 5],
		['name' => 'kamay', 'price' => 40],
		['name' => 'ulo', 'price' => 2]
	];

	foreach($products as $product){

		if($product['name'] === 'balikat'){
			break;
		}

		if($product['price'] > 15){
			continue;
		}

		echo $product['name'] . '<br />';

	}

?>

<!DOCTYPE html>
<html>
<head>
	<title>L02</title>
</head>
<body>
    <h1 align="center">Continue & Break</h1>
</body>
</html>