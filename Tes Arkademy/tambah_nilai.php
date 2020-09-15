<?php 
if(isset($_POST['Submit'])) {
        $nama = $_POST['nama'];
        $alamat = $_POST['alamat'];
        $umur = $_POST['umur'];

        include_once("database.php");

        $result = mysqli_query($con, "INSERT INTO db_table (nama,alamat,umur) VALUES('$nama','$alamat','$umur')");

        echo "User added successfully. <a href='index.php'>View Users</a>";
    }
?>