<?php
include_once("database.php");

$id = $_GET['id'];

$result = mysqli_query($con, "DELETE FROM db_table WHERE id=$id");

header("Location:index.php");
?>