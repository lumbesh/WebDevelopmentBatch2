<?php 
    // Loops //
	$names = ['AJ', 'EyJey', 'Jay'];

	for($i = 0; $i < count($names); $i++){
		echo $names[$i] . '<br />' ;
	}
	// foreach($names as $name){
	// 	echo $name . ' <br/>';
	// }

	$products = [
        ['name' => 'paa', 'price' => 20],
		['name' => 'tuhod', 'price' => 10],
		['name' => 'balikat', 'price' => 15],
		['name' => 'itlog', 'price' => 5],
		['name' => 'kamay', 'price' => 40],
		['name' => 'ulo', 'price' => 2]
	];

	foreach($products as $product){
		echo $product['name'] .' - '. $product['price'];
		echo '<br />';
	}

	// $i = 0;

	// while($i < count($products)){
	// 	echo $products[$i]['name'];
	// 	echo '<br />';
	// 	$i++;
	// }


?>

<!DOCTYPE html>
<html>
<head>
	<title>LO2 LOOPS</title>
</head>
<body>

	<h1>Loops</h1>
	<ul>
		<?php foreach($products as $product){ ?>
			<h3><?php echo $product['name']; ?></h3>
			<p>Php.<?php echo $product['price']; ?></p>
		<?php } ?>
	</ul>

</body>
</html>