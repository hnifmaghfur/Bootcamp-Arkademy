const devideAndSort = (data) => {
  if (typeof data == "number") {
    let temp = [];
    let tempData = "";
    let stringData = data.toString();
    let arrData = stringData.split("0");

    for (i = 0; i < arrData.length; i++) {
      temp = arrData[i].split("").sort();
      tempData += temp.join("");
    }
    return parseInt(tempData);
  } else {
    return "Input harus berupa Number";
  }
};
console.log(devideAndSort(9203405121231));
console.log(typeof devideAndSort(9203405121231));
