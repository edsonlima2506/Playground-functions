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
let frase = 'Foguete';
function splitSentence(frase) {
  let palavras = frase.split(' ');
  let array = [];
  array.push(palavras);

  return array;
}
console.log(splitSentence(frase));

// Desafio 4
function concatName() {
  
}

// Desafio 5
function footballPoints() {
  
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
