<?php

$conn = mysqli_connect('localhost', 'root', '', 'test');

if(!$conn) {
    die('Database Connection Failed');
}
else {
    echo "Database Connection Success";
}

$enroll = $_POST["enrollment"];
$pass = $_POST["password"];

$sql = "SELECT enrollment, password from `test1` where enrollment='$enroll' and password='$pass'";

if(mysqli_query($conn, $sql))  {
    header('location:dashbord.php');
}
else {
    echo "Error: "."<br>". mysqli_error($conn);
}

mysqli_close($conn);
?>