function dwarfRollCall(dwarves) {
  let numDwarf =[];
  dwarves.forEach(function(name, nameIndex) {
    numDwarf.push(`${nameIndex + 1}. ${dwarves[nameIndex]}`);
  });
  return numDwarf.join (' ')
}

function summonCaptainPlanet(planeteerCalls){
return planeteerCalls.map(call =>
   call.toUpperCase() +"!")
  }



function longPlaneteerCalls(words) {
  for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
    if (words[wordsIndex].length > 4) {
      return true
    } else {
      return false
    }
  }
}


function findTheCheese (foods) {
 for (let i = 0; i < foods.length; i++ ) {
  if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
    return foods[i]
   }
 }
    return "no cheese!"
}
