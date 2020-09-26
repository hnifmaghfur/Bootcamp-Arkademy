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

const searchName = (nama, jumlah, cb) => {
  const filter = name.filter((s) => s.toLowerCase().includes(nama));
  console.log(filter);
  cb(filter, jumlah);
};

const callback = (param, jumlah) => {
  const slice = param.slice(0, jumlah);
  console.log(slice);
};

searchName("q", 4, callback);
