<?php

// Connect to database
$conn = mysqli_connect('localhost', 'AJ', 'AJ@', 'SURIGAO');

// check connection
if(!$conn){
    echo 'Connection error: ' . mysqli_connect_error();
}

?>