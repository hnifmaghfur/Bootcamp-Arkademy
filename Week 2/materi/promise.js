let janjian = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("berhasil");
  }, 2000); //3000ms = 3s

  //javascript ada namanya asycronous dimana berfungsi untuk melanjutkan pemanggilan proses
  //jika suatu proses terdapat delay dalam pemrosessanya misal
  //dibawah ini setTimeout nya dibikin lebih kecil dari yang diatas, maka
  //nilai yang akan keluar yang bawah karena waktunya lebih cepat yang bawah dari yang atas

  setTimeout(() => {
    reject(new Error("janji dibatalkan"));
  }, 3000);
});

//then digunakan untuk promise resolve
janjian
  .then((result) => {
    console.log(result);
    //catch digunaan untuk promise reject
  })
  .catch((error) => {
    console.log(error.message);
    //finally digunakan untuk penutupan, tidak pengaruh dia then atau catch
  })
  .finally(() => {
    console.log("Selesai");
  });
