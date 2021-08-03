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
let arrayNumeros = [0, 4, 4, 4, 9, 2, 1];
function highestCount(arrayNumeros) {
  let quantidade = 0;
  function maiorNumero(a, b) {
    return b - a;
  }
  let listaOrganizada = arrayNumeros.sort(maiorNumero);

  for(let i = 0; i < arrayNumeros.length; i++){
    if(arrayNumeros[i] === listaOrganizada[0]){
      quantidade++;
    }
  }
  console.log(listaOrganizada);
  return quantidade;
}


// Desafio 7
let mouse = 1;
let cat1 = 6;
let cat2 = 12;
function catAndMouse(mouse, cat1, cat2) {
  let maisPerto = '';
  if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    maisPerto = "cat1"
    return maisPerto;
  } else if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    maisPerto = "cat2";
    return maisPerto;
  } else if(Math.abs(cat1 - mouse) == Math.abs(cat2 - mouse)){
    maisPerto = "os gatos trombam e o rato foge";
    return maisPerto;
  }
}
console.log(catAndMouse(cat1, cat2, mouse));
// Desafio 8
let fizzBuzzNumeros = [2, 15, 7, 9, 45];
function fizzBuzz(fizzBuzzNumeros) {
  let resultado = [];
  for(let i = 0; i < fizzBuzzNumeros.length; i++){
    if((fizzBuzzNumeros[i] % 3) == 0 && (fizzBuzzNumeros[i] % 5) != 0){
      resultado.push('fizz');
    } else if((fizzBuzzNumeros[i] % 3) != 0 && (fizzBuzzNumeros[i] % 5) == 0){
      resultado.push('buzz');
    } else if ((fizzBuzzNumeros[i] % 3) == 0 && (fizzBuzzNumeros[i] % 5) == 0){
      resultado.push('fizzBuzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
let param = ''
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
}
