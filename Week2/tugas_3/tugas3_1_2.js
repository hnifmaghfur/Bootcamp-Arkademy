let data = [
  {
    id: 1,
    name: "Beras",
    harga: 10000,
    qty: 0,
  },
  {
    id: 2,
    name: "Terigu",
    harga: 7500,
    qty: 0,
  },
  {
    id: 3,
    name: "Gula",
    harga: 15000,
    qty: 0,
  },
];

let sembako = (callback, belanja) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (belanja) {
        resolve(callback(0, 1, 2, 1));
      } else {
        reject(new Error("Tidak ada yang dibeli"));
      }
    }, 1000);
  });
};

let hitung = (indexBeras, indexTerigu, valueBeras, valueTerigu) => {
  data.map((item, index) => {
    if (index == indexBeras) {
      item.qty = valueBeras;
      console.log(
        `Total belanja ${item.name} adalah Rp. ${item.harga * item.qty} Rupiah`
      );
    } else if (index == indexTerigu) {
      item.qty = valueTerigu;
      console.log(
        `Total belanja ${item.name} adalah Rp. ${item.harga * item.qty} Rupiah`
      );
    } else {
      console.log(`${item.name} tidak dibeli`);
    }
  });
};

// sembako(hitung, "ayo belanja")
//   .then((res) => res)
//   .catch((err) => console.log(err.message));

let nilaiSembako = async () => {
  try {
    let nilai = await sembako(hitung, "kuy");
    return nilai;
  } catch (error) {
    console.log(error.message);
  }
};

nilaiSembako();
