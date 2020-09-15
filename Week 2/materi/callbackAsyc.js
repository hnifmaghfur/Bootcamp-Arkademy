let salam = (message) => {
  console.log(message);
};

let greetings = (param) =>
  new Promise((resolve, reject) => {
    let succes = true;
    if (succes) {
      resolve("Data didapatkan");
      //ini callback Asycronous
      param("Selamat Datang");
    } else {
      param("Selamat");
      reject(new Error("error"));
    }
  });

greetings(salam)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
