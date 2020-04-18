function totalDigitRekursif(angka) {
    if(angka <= 9){
      return angka
    } else {
      var sisaBagi = angka % 10
      var result = (angka - sisaBagi) /10
      return sisaBagi + totalDigitRekursif(result)
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5