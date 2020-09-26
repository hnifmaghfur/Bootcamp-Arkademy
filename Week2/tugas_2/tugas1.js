//concat()
//concat adalah salah satu build function javascript untuk mengabungkan ke dua array atau lebih
let dataConcat = ['hanif']
let dataConcat1 = ['maghfur']
console.log('Penggabungan array dengan concat = ' + dataConcat.concat(dataConcat1))

//every()
//every adalah build in function javascript yang digunakan untuk mengecek kebenaran 
//semua data dari sebuah array. Output berupa boolean
let dataEvery = [10,15,25]
console.log('Penggunaan array dengan every = ' + dataEvery.every(data => typeof data === 'number'));

//find()
//find adalah build in function javascript yang diunakan untuk mencari data pada array
//jika data telah ditemukan maka pencarian akan terhenti, jadi pencarian tidak mencari ke semua array
let dataFind = [12, 7, 35, 33, 20]
console.log('Penggunaan array dengan find = ' + dataFind.find(data => data >= 30));

//findIndex()
//findIndex sama seperti find() namun yang dicari berupa indexnya bukan data/item nya
console.log('Penggunaan array dengan findIndex = ' + dataFind.findIndex(data => data >= 30));

//join()
//join() adalah penggabungan array namun data yang dikembalikan berupa string
let dataJoin= ['Hanif', 'Maghfur']
console.log('Penggunaan join = ' + dataJoin.join() + ' tipe data = ' + typeof dataJoin.join());

//split()
//split adalah build in function untuk memisahkan sebuah string menjadi beberapa data array
let dataSplit = 'Hanif Maghfur'
console.log('Penggunana split pada string = ' + dataSplit.split(' ', 2));

//push()
let dataPush = [1,2,4,2]
let dataPush2 = 'hanif'
dataPush.push(dataSplit)
console.log('Penggunaan Push pada Array = ' + dataPush);

//reverse()
//reverse adalah build in function javascript yang digunakan untuk memutar sebuah data
//dari yang paling akhir menjadi paling awal dan sebaliknya
let dataReverse = [1,5,'hanif',7]
console.log('Penggunaan Reverse pada Array = ' + dataReverse.reverse());

//slice()
//slice digunakan untuk memotong sebuah array dengan menentukan letak index data yang akan dipotong
let dataSlice = [1,5,'hanif',7]
console.log('Penggunan slice pada Array = ' + dataSlice.slice(1,3));

//toString()
//toString adalah build in function untuk mengubah tipedata Array menjadi tipe data string
let dataToString = [1,5,'hanif',7]
console.log('pengunaan toString pada Array = ' + dataToString.toString() + ' tipe datanya = ' + typeof dataToString.toString());
