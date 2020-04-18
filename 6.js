function meleeRangedGrouping (str) {
  var tampungRanged = []
  var tampungMalee = []

  if(str.length == 0){
    return []
  }

    var splitKoma= []
    var temp= ''
    str+= ','
      for(var i=0; i<str.length; i++){
        if(str[i] !== ','){
          temp= temp + str[i]
        } else {
          splitKoma.push(temp)
          temp= ''
        }
      } 
      // return splitKoma

      var temp2 = ''
      var splitMinus = []
      for(var i=0; i<splitKoma.length; i++){
        splitKoma[i]+= '-'
        var array = []
        for(var j=0; j<splitKoma[i].length; j++){
          if(splitKoma[i][j] !== '-'){
            temp2+= splitKoma[i][j]
          } else {
            array.push(temp2)
            temp2 = ''
          }
        }
        if(array[1] === 'Ranged'){
          tampungRanged.push(array[0])
        } else 
        if(array[1] === 'Melee'){
          tampungMalee.push(array[0])
        }
      }
      // console.log(tampungMalee)
      // console.log(tampungRanged)
      return [tampungRanged, tampungMalee]
      
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []