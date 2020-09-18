function checkPalindrom(palindrom) {
  palindrom = palindrom.toLowerCase();
  let check = true;
  let j = palindrom.length - 1;
  var cnt = j / 2;
  //console.log(cnt);
  for (i = 0; i < cnt + 1; i++, j--) {
    if (palindrom[i] != palindrom[j]) {
      check = false;
      break;
    }
  }
  if (check) {
    console.log("Kata adalah palindrome.");
  } else {
    console.log("Kata bukan palindrome.");
  }
}
checkPalindrom(0011);
