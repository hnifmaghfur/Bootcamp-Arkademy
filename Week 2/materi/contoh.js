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
];

let hitung = (indexBeras, indexTerigu, valueBeras, valueTerigu) => {
  data.map((item, index) => {
    if (index == indexBeras) {
      item.qty = valueBeras;
      console.log(
        "Total belanja Beras adalah Rp. " + item.harga * item.qty + " Rupiah"
      );
    } else if (index == indexTerigu) {
      item.qty = valueTerigu;
      console.log(
        "Total belanja Terigu adalah Rp. " + item.harga * item.qty + " Rupiah"
      );
    } else {
      console.log("Item tidak dibeli");
    }
  });
};

hitung(0, 1, 3, 3);
