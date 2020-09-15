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
    <form action="tambah_nilai.php" method="post" name="formAdd">
        <table style="border: 0;">
            <tr>
                <td>Masukan Nama :</td>
                <td><input type="text" name="nama"></td>
            </tr>
            <tr>
                <td>Masukan Alamat : </td>
                <td><input type="text" name="alamat"></td>
            </tr>
            <tr>
                <td>Masukan Umur :</td>
                <td ><input type="text" name="umur"></td>
            </tr>
            <tr style="border: 0;">
                <td style="border: 0;"></td>
                <td style="border: 0; "><input type="submit" value="Submit" name="Submit" style="margin-top: 10px;"></td>
            </tr>
        </table>
    </form>
</body>
</html>