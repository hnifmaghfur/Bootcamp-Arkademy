<?php 
    include_once("database.php");
    
    $result = mysqli_query($con, "SELECT * FROM db_table ORDER BY id DESC");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h3>Form CRUD</h3>
    <a href="tambah.php"><button>Tambah</button></a>
    <table>
        <tr>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Umur</th>
            <th>Action</th>
        </tr>
        <?php  
            while($data = mysqli_fetch_array($result, MYSQLI_ASSOC)) {         
                echo "<tr>";
                echo "<td>".$data['nama']."</td>";
                echo "<td>".$data['alamat']."</td>";
                echo "<td>".$data['umur']."</td>";    
                echo "<td><a href='edit.php?id=$data[id]'><button>Edit</button></a><a href='delete.php?id=$data[id]'><button>Delete</button></a></td></tr>"; 
            }
        ?>
    </table>
</body>
</html>