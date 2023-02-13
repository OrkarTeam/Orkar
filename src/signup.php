<?php

$email = $_POST['email'];
$wallet = $_POST['wallet'];
$username = $_POST['username'];
$password = $_POST['password'];
$bio = $_POST['bio'];

// Connect to the database
$servername = "localhost";
$dbUsername = "your_username";
$dbPassword = "your_password";
$dbName = "your_database_name";

// Create connection
$conn = mysqli_connect($servername, $dbUsername, $dbPassword, $dbName);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Insert the data into the database
$sql = "INSERT INTO users (email, wallet, username, password, bio) VALUES ('$email', '$wallet', '$username', '$password', '$bio')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>
