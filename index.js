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

var uppercase = "Hello";
var lowercase = "hello";
var mixedCase = "Hi there";

function sayHiToGrandma(string){
  if(uppercase.toUpperCase() === uppercase){
    return("I can't hear you!")
  }
  if(lowercase.toLowerCase() === lowercase){
    return("YES INDEED!")
  }
  if(string === "I love you, Grandma."){
    return("I love you, too.")
  }
}
