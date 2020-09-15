<?php
    include_once("database.php");

    $id = $_GET['id'];

    $result = mysqli_query($con, "SELECT * FROM db_table WHERE id=$id");

    $user_data = mysqli_fetch_array($result, MYSQLI_ASSOC)
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <a href="index.php"><button style="margin: 5px 0 10px 10px;">Home</button></a>
    <form action="edit_nilai.php" method="post" name="edit">
        <table style="border: 0;">
            <tr>
                <td>Masukan Nama :</td>
                <td><input type="text" name="nama" value=<?php echo $user_data['nama'];?>></td>
            </tr>
            <tr>
                <td>Masukan Alamat : </td>
                <td><input type="text" name="alamat" value=<?php echo $user_data['alamat']?>></td>
            </tr>
            <tr>
                <td>Masukan Umur :</td>
                <td ><input type="text" name="umur" value=<?php echo $user_data['umur'];?>></td>
            </tr>
            <tr style="border: 0;">
                <td style="border: 0;"><input type="hidden" name="id" value=<?php echo $id;?>></td>
                <td style="border: 0; "><input type="submit" value="Update" name="update" style="margin-top: 10px;"></td>
            </tr>
        </table>
    </form>
</body>
</html>