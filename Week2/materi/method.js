let nilai = [0, 4, 10, 35, 29]

//sort
//sort lebih cocok di gunakan di alpabet karena dia tidak menghitung isi melainkan menghitung awalnya saja
let penggunanaSort = nilai.sort();
console.log(penggunanaSort);

//map
//map digunakan untuk memetakan nilai dari suatu array
//map merupakan perulangan
nilai.map((item, index) =>
    {
        //dengan mengunakan map juga dapat mengubah isi didalam suatu index
        if(index == 2){
            item = 'Hanif Maghfur'
            console.log(`isi item = ${item}, index nya ${index}`)
        } else {
            console.log(`isi item = ${item}, index nya ${index}`)
        }
    })

//filter
//filter biasa di gunakan di front end side, jadi data harus ditampung didalam storage frontend 
//dan memberatkan ketika load data



//push
//push di gunakan untuk menambahkan di akhir sebuah array
let nama = ['hanif', 'maghfur', 'pria']
nama.push('sejati')
console.log(nama);

let penggunaanFilter = nama.filter((item, index) => item == 'f')
console.log(penggunaanFilter);