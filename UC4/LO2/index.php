<?php
 # Variable
$name = 'AJ Lumbes';
$age = 20;
$stringOne = 'Email Address: ';
$stringTwo = 'aj.lumbes@gmail.com';

$peopleOne = ['AJ', 'EyJey', 'JAY'];
$peopleTwo = array('egis', 'HAHAHHAHAHA');
$ages = [20, 21, 22, 23];

$blogs = [
	['try', 'tryy', 'trial', 25],
	['yacht', 'alpha', 'tinker', 18],
	['south', 'umbrella', 'news', 19]
];

$x = 5;
$y = 5;

$stringThree = 10;


?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>LO2 ASSIGNMENT</title>
</head>
<body>
	<h1>LO2 ASSIGNMENT</h1>
	Name: <?php echo $name; ?><br>
	Age: <?php echo $age; ?><br>

	<!-- String & Concatenation -->
<?php
	echo $stringOne.$stringTwo;
	echo "<br>Hey, My Name is $name<br>";
	echo strlen($stringTwo) . ' is the length of my Email<br>';
	echo strtoupper($name);	
?>
<br>
	<!-- Numbers basic Operators -, *, +, / -->
<?php
	echo 'x=5, y=5, x+y is = ' . $x * $y;
	echo '<br>Math Operations 2 * (4+9) / 3 = ' . 2 * (4+9) / 3;	
	?>
<br>
	<!-- Arrays -->
<?php
	echo 'The Array in peopleOne is ' . $peopleOne[1];
	echo '<br> The Array in peopleTwo is ' . $peopleTwo[0] . '<br>';
	print_r($ages) . '<br>';
?>
<br>
	<!-- Multi Dimentional Arrays -->
<?php
	print_r($blogs[0]);
	print_r('<br>'.$blogs[0][0]);
?>
</body>
</html>