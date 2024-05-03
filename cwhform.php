<?php
echo "welcome to the sql server storage.<br>";
echo "linking with the server.<br>";

//connecting to database
$servername = "localhost";
$username = "root";
$password = "";

//connection object
$connect = mysqli_connect($servername,$username,$password);
echo "connection established";

//die if not
if(!$connect){
    echo "connection failed.";
}
else{
    echo "success.";
}


//create a database
$sql = "CREATE DATABASE STUDENT1";
$result = mysqli_query($connect, $sql);
if(!$result){
    die("the database creation failed due to.---->".mysqli_error($connect));
}
else{
    echo "success";
}

?>