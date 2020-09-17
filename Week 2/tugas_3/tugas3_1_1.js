const searchName = (cari, value) => {
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const diFilter = name.filter((s) => s.toLowerCase().includes(cari));
      if (diFilter.length > 0) {
        const diSlice = diFilter.slice(0, value);
        resolve(diSlice);
      } else {
        reject(new Error("Hasil filter Gagal"));
      }
    }, 3000);
  });
};

//menggunakan then dan catch
// searchName("q", 2)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err.message));

//menggunakan trycatch
let pencarian = async (kata, nilai) => {
  try {
    let result = await searchName(kata, nilai);
    // const diSlice = result.kata.slice(0, result.nilai);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};

pencarian("q", 3);
