let printSegitiga = (nilai) => {
    if(typeof nilai === 'number'){
      for(i=nilai; i >= 0; i--) {
        let temp = ''
        for(j=1; j <= i; j++){
          temp += j
        }
        console.log(temp)
      }
    } else {
      console.log('Data harus number')
    }
  }
  
  printSegitiga(5)