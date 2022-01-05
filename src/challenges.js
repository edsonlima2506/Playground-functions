// Desafio 1
function compareTrue(climaEnsorarado, diaLindo) {
  if (climaEnsorarado === true && diaLindo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let palavras = frase.split(' ');
  return palavras;
}

// Desafio 4
function concatName(fullName) {
  return `${fullName[fullName.length - 1]}, ${fullName[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let quantidade = 0;
  function maiorNumero(a, b) {
    return b - a;
  }
  let listaOrganizada = arrayNumeros.sort(maiorNumero);

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] === listaOrganizada[0]) {
      quantidade += 1;
    }
  }
  console.log(listaOrganizada);
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let maisPerto = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    maisPerto = 'cat1';
    return maisPerto;
  } if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    maisPerto = 'cat2';
    return maisPerto;
  } if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    maisPerto = 'os gatos trombam e o rato foge';
    return maisPerto;
  }
}

// Desafio 8
function fizzBuzz(fizzBuzzNumeros) {
  let resultado = [];
  for (let i = 0; i < fizzBuzzNumeros.length; i++) {
    if ((fizzBuzzNumeros[i] % 3) === 0 && (fizzBuzzNumeros[i] % 5) !== 0) {
      resultado.push('fizz');
    } else if ((fizzBuzzNumeros[i] % 3) !== 0 && (fizzBuzzNumeros[i] % 5) === 0) {
      resultado.push('buzz');
    } else if ((fizzBuzzNumeros[i] % 3) === 0 && (fizzBuzzNumeros[i] % 5) === 0) {
      resultado.push('fizzBuzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(word) {
  let textoCodificado = [];
  let stringCodificada = '';
  for (let key in word) {
    if (word[key] === 'a' || word[key] === 'A') {
      textoCodificado.push('1');
    } else if (word[key] === 'e' || word[key] === 'E') {
      textoCodificado.push('2');
    } else if (word[key] === 'i' || word[key] === 'I') {
      textoCodificado.push('3');
    } else if (word[key] === 'o' || word[key] === 'O') {
      textoCodificado.push('4');
    } else if (word[key] === 'u' || word[key] === 'U') {
      textoCodificado.push('5');
    } else {
      textoCodificado.push(word[key]);
    }
  }
  for (let key in textoCodificado) {
    stringCodificada += textoCodificado[key];
  }
  return stringCodificada;
}

function decode(string) {
  let textoDecodificado = [];
  let stringDecodificada = '';
  for (let key in string) {
    if (string[key] === '1') {
      textoDecodificado.push('a');
    } else if (string[key] === '2') {
      textoDecodificado.push('e');
    } else if (string[key] === '3') {
      textoDecodificado.push('i');
    } else if (string[key] === '4') {
      textoDecodificado.push('o');
    } else if (string[key] === '5') {
      textoDecodificado.push('u');
    } else {
      textoDecodificado.push(string[key]);
    }
  }
  for (let key in textoDecodificado) {
    stringDecodificada += textoDecodificado[key];
  }
  return stringDecodificada;
}
console.log(decode(string));

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
