let rataUN = (mtk, bIndo, bIng, ipa) => {

    let temp
    let fungsi = (n, i) => {
        if ( n !== null && typeof n === 'number' ) {
            temp = n
            return temp
        } else if( typeof n !== 'number' ) {
            return `Nilai ${i} harus berupa Angka`
        } else {
            return `Masukan nilai ${i}`
        }
    }

    //memanggil isi & validasi range nilai
    let matematika = fungsi(mtk, 'Metematika');
    let nilaiMTK = typeof matematika === "number" ? matematika : console.log(matematika);
    let bahasaIndo = fungsi(bIndo, 'Bahasa Indonesia');
    let nilaiBIndo = typeof bahasaIndo === "number" ? bahasaIndo : console.log(bahasaIndo);
    let bahasaIng = fungsi(bIng, 'Bahasa Inggris');
    let nilaiBIng = typeof bahasaIng === "number" ? bahasaIng : console.log(bahasaIng);
    let ilmuPA = fungsi(ipa, 'IPA');
    let nilaiIPA = typeof ilmuPA === "number" ? ilmuPA : console.log(ilmuPA);

    //membuat rata2
    let result = (nilaiMTK + nilaiBIndo + nilaiBIng + nilaiIPA)/4

    //kondisi jika salah satu ada yang bukan number
    if(isNaN(result)){
        console.log('Nilai Error');
    } else {
        //menentukan range golongan nilai
        result >= 90 && result <= 100 ? console.log('Nilai A') : result >=80 && result <= 89 ? 
        console.log('Nilai B') : result >= 70 && result <= 79 ? console.log('Nilai C') :
        result >= 60 && result <= 69 ? console.log('Nilai D') : result >= 0 && result <= 59 ?
        console.log('Nilai E') : console.log('Nilai Error')
    }
}


rataUN(90,96,200)
