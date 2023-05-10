<?php

$conn = mysqli_connect('localhost', 'root', '', 'test');

if (!$conn) {
    die("database connection failed");
} else {
    echo "database connected";

}  
    $name = $_POST["name"];
    $enroll = $_POST["enroll"];
    $pass = $_POST["pass"];
    $branch = $_POST["branch"];
    $sem = $_POST["sem"];

    $query = "INSERT INTO `test1` (`name`, `enrollment`, `password`,`branch`, `sem`) values ('$name', '$enroll', '$pass', '$branch', '$sem')";

    $result = mysqli_query($conn, $query);

    if ($result == true) {
        header('location:login.php');
    } else {
        echo "error" . mysqli_error($conn);
    }

    mysqli_close($conn);

?>