const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};
//menggunakan then catch
//Dengan menggunakan then catch kita harus menambahkan fungsi untuk mengesekusi then nya
//namun kita tidak perlu mendeklarasi sebuah variable dalam penggunaannya
// cekHariKerja("minggu")
//   .then((res) => console.log(`${res} adalah Hari kerja`))
//   .catch((err) => console.log(err.message));

//menggunaan try/catch
//Dengan menggunakan try catch kita dapat memanggil promise tanpa perlu banyak pemanggilan fungsi
//selain itu try/catch hanya dapat di gunaka dengan async / await
let cek = async (hari) => {
  if (typeof hari == "string") {
    try {
      let result = await cekHariKerja(hari);
      console.log(`${result} adalah Hari kerja`);
    } catch (err) {
      console.log(err.message);
    } finally {
      console.log("oke");
    }
  } else {
    console.log("Input harus string");
  }
};

cek(10);
