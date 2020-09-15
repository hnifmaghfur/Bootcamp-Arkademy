//Callback Function
//callback adalah metode melempar balik data/fungsi dari sebuah fungsi
//kefungsi lainya

let sayHello = (nama, callback) => {
    let isi = `hallo ${nama}`
    callback(isi)
}

let tampilSayHello = (callback) => {
    console.log(callback);
}

sayHello('Hanif', tampilSayHello)