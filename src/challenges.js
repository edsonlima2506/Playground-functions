// Desafio 1
let climaEnsorarado = true;
let diaLindo = false;
function compareTrue(climaEnsorarado, diaLindo) {
  if(climaEnsorarado == true && diaLindo == true ){
    return true;
  } else {
    return false;
  }
}


// Desafio 2
let base = 10;
let height = 50;
function calcArea(base, height) {
  calcArea = (base * height) / 2;
  return calcArea;
}

// Desafio 3
let frase = 'vamo que vamo';

function splitSentence(frase) {
  let palavras = frase.split(' ');

  return palavras;
}

// Desafio 4
let fullName = ['edson', 'eduardo', 'costa', 'de', 'lima']
function concatName(fullName) {
  let name = fullName[fullName.length - 1] + ', ' + fullName[0];
  return name;
}

// Desafio 5
let wins = 14;
let ties = 8;
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;

  return points;
}

// Desafio 6
function highestCount() {
  
}

// Desafio 7
function catAndMouse() {
  
}

// Desafio 8
function fizzBuzz() {
  
}

// Desafio 9
function encode() {
  
}
function decode() {
  
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
