function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
  string = uppercase;
}

function logWhisper(string){
  console.log(string.toLowerCase())
  string = lowercase;
}

var uppercase = "HELLO";
var lowercase = "hello";

function sayHiToGrandma(string){
  if(string.toLowerCase() === lowercase){
    return("I can't hear you!")
  }
  if(string.toUpperCase() === uppercase){
    return("YES INDEED!")
  }
  if(string === 'I love you, Grandma.'){
    return("I love you, too.")
  }
}
