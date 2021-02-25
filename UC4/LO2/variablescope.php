<?php 

	// variable scope

	// local vars

	function myFunc(){
		$price = 10;
		echo $price;
	}

	// myFunc();
	// echo $price;

	function myFuncTwo($age){
		echo $age;
	}

	// myFuncTwo(25);
	// echo $age;

	// global variables

	$name = 'AJ';

	function sayHello(){
		global $name;
		$name = 'LODS' .'<br>';
		echo "hello $name ";
	}

	sayHello();
	echo $name . '<br>';

	function sayBye(&$name){
		$name = 'AJ' . '<br>';
		echo "HANGGANG SA MULI $name ";
	}

	sayBye($name);
	echo $name;


?>

<!DOCTYPE html>
<html>
<head>
	<title>L02</title>
</head>
<body>
   <h1>Variable Scope</h1>
</body>
</html>