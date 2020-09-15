const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found", []));
    }
  }, 4000);
};

let cb = (param, param1) => {
  if (param == null) {
    param1.map((item) => console.log(item));
  } else {
    console.log(param.message);
  }
};

getMonth(cb);
