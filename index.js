function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

var uppercase = "HELLO!";
var lowerCase = "hello!";
var mixedCase = "Hi there";

function sayHiToGrandma(string){
  if(string.toUpperCase() === uppercase){
    return("YES INDEED!")
  }
  if(string.toLowerCase() === lowercase){
    return("I can't hear you!")
  }
  if(string === "I love you, Grandma."){
    return("I love you, too.")
  }
}
