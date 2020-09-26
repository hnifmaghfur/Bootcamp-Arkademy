let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {

    let awal,akhir,data
    //Validasi
    typeof nilaiAwal === 'number' ? nilaiAwal : console.log('nilai awal harus berupa number')
    typeof nilaiAkhir === 'number' ? nilaiAkhir : console.log('nilai akhir harus berupa number')

    if(nilaiAwal < nilaiAkhir && typeof nilaiAwal === 'number' && typeof nilaiAkhir === 'number' ) {
        awal = nilaiAwal
        akhir = nilaiAkhir
    } else {
        console.log('nilai akhir harus lebih besar dari nilai awal');
    }

    Array.isArray(dataArray) === false ? console.log('Data harus berupa array') : dataArray
    if( dataArray.length >= 5 ) {
        data = dataArray 
    } else {
        return(console.log('Jumlah angka dalam data Array harus lebih dari 5'))                 //return digunakan untuk break program
    }

    //perintah
    let onFilter = (awal, akhir, data, cb) => {
        if( dataArray.every(data => typeof data === 'number') === false ) {
            console.log('Data array harus berupa number')
        } else {
            let dataFilter = data.filter(data => data > awal && data < akhir)
            cb(dataFilter)
        }
    }

    let onSort = (dataFilter) => {
        console.log(dataFilter.sort((a,b)=>a-b));
    }

    onFilter(awal,akhir,data,onSort)

}

seleksiNilai(2,20, [11,3,16,100])