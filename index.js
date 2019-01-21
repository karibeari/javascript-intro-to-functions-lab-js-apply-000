function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
  var uppercase = "HELLO";
}

function logWhisper(string){
  console.log(string.toLowerCase())
  var lowercase = "hello";
}





function sayHiToGrandma(string){
  if(string.toUpperCase() === uppercase){
    return("YES INDEED!")
  }
  if(string === lowercase){
    return("I can't hear you!")
  }
  if(string === 'I love you, Grandma.'){
    return("I love you, too.")
  }
}
