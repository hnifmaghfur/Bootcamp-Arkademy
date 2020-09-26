function reverse(str) {
  let temp = "";
  let arrStr = [];
  let hasil = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      arrStr.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }
  if (temp.length > 0) {
    arrStr.push(temp);
  }
  for (x = arrStr.length - 1; x >= 0; x--) {
    hasil += " " + arrStr[x];
  }
  return hasil;
}

var str = "saya suka javascript";
console.log(reverse(str));
