<?php
include_once("database.php");

if(isset($_POST['update']))
{   
    $id = $_POST['id'];
    $nama=$_POST['nama'];
    $alamat=$_POST['alamat'];
    $umur=$_POST['umur'];

    $result = mysqli_query($con, "UPDATE db_table SET nama='$nama',alamat='$alamat',umur='$umur' WHERE id=$id");

    header("Location:index.php");;
}
?>