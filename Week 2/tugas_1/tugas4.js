    let data = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: 
        {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    }
        
    let data2 = {
        name: "Hanif Maghfur",
        email: "hnifmaghfur@gmail.com",
        hobby: ["Baca", "Main Gim"]
    }

    //tugas 1 mengganti isi dari name, email dan menambahkan hobby
    const gabungData = {...data, ...data2}

    // console.log(gabungData);

    //tugas 2 memanggil street dan city menggunakan destructuring
    const {id:id, name:name, username:username, email:email, address:address} = data
    const {street:street, suite:suite, city:kota, zipcode:zipcode} = address

    console.log(`Jalannya adalah ${street}`);
    console.log(`Kotanya adalah ${kota}`);