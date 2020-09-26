const nilai = [
  {
    nama: "Hanif Maghfur",
    usia: 25,
  },
  {
    nama: "Arungi Cahaya",
    usia: 7,
  },
  {
    nama: "Saidina Hamzah",
    usia: 13,
  },
];

const panggil = (params) => {
  //params[1] berarti index ke 1 (ingat index dimulai dari 0)
  const tugas = params[0];
  console.log(tugas.nama);
};

panggil(nilai);
