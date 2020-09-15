const nilai = [
    {
        nama: 'Hanif Maghfur',
        usia: 25
    },
    {
        nama: 'Winda Aprilia',
        usia: 25
    },
    {
        nama: 'Faris Abdullah',
        usia: 13
    },
]

const panggil = (params) => {
    //params[1] berarti index ke 1 (ingat index dimulai dari 0)
    const winda = params[1]
    console.log(winda.nama);
}

panggil(nilai);