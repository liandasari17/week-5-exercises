function changeVocals (str) {
  var vocal = 'aiueoAIUEO'
  var change = 'bjvfpBJVFP'
  var result = ''
  
  for(var i=0; i<str.length; i++){
    var check = false
    for(var j=0; j<vocal.length-1; j++){
      if(str[i] === vocal[j]){
        result += change[j]
        check = true
      }
    }
    if(check == false){
      result += str[i]
    }
  }
    return result
}

function reverseWord (str) {
  var result = ''

  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  return result
}


function setLowerUpperCase (str) {
  var result = ''
  for(var i=0; i<str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      result += str[i].toUpperCase()
    } else
      if(str[i] === str[i].toUpperCase()){
        result += str[i].toLowerCase()
    }
  }
  return result
}


function removeSpaces (str) {
  var result = ''
  for(var i=0; i<str.length; i++){
    if(str[i] !== ' '){
      result += str[i]
    }
  }
  return result
}


function passwordGenerator (name) {
    var ubahVokal = changeVocals(name);
    var balikKata = reverseWord(ubahVokal);
    var lowerUpper = setLowerUpperCase(balikKata);
    var hapusSpasi = removeSpaces(lowerUpper);
    
    if (name.length < 5) {
    result = 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
    result = hapusSpasi
  }
  return result
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'