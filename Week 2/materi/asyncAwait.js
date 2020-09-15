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

//asyncAwait adalah versi simpel dari promise
let memanggilJanjian = async () => {
  try {
    //jangan lupa panggil promise nya dengan await
    let result = await janjian;
    console.log(result);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("selesai");
  }
};

memanggilJanjian();

//self invoke function
(async () => {
  try {
    let result = await janjian;
    console.log(result);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("selesai");
  }
})();
