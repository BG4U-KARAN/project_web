<?php
    session_start();

    $con = mysqli_connect('localhost', 'root');

    if($con) {
        echo "connection successfully";
    } else {
        echo "connection failed";
    }
    mysqli_select_db($con, 'test');
    $username = $_POST["username"];
    $password = $_POST["password"];

    $q = "select * from signin where username = '$username' && password = '$password'";
    $result = mysqli_query($con, $q);
    $num = mysqli_num_rows($result);

    if($num == 1) {
        $_SESSION["username"]=$username;
        header('location:home.html');
    } else {
        header('location:login.html');
    }
?>