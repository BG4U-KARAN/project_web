<?php
// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "test");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "connected";
}

// If the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["username"];
    $enrollment = $_POST["enrollment"];
    $password = $_POST["password"];
    $branch = $_POST["diploma_branch"];
    $sem =$_POST["diploma_semseter"];
    // Insert data into the database
    $sql = "INSERT INTO `emp` (`name`, `enrollment`, `password`, `branch`, `sem`) VALUES ('$name', $enrollment, '$password','$branch','$sem');";
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Close the database connection
mysqli_close($conn);
?>
