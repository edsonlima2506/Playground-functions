// Desafio 10
let tech = [];
let name = "";
let arrayFinal = [];
function techList(tech, name) {
  let erro = "Vazio!"
  for(i = 0; i < tech.length; i++){
    let objeto = {};
    objeto["tech"] = tech[i];
    objeto["name"] = name;
    arrayFinal.push(objeto);
  }
  arrayFinal.sort(function(a, b) {
    if(a.tech < b.tech) {
      return -1;
    } else {
      return true;
    }
  });
  if(tech.length === 0){
    return erro;
  } else {
    return arrayFinal;
  }
}

// Desafio 11
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
function generatePhoneNumber(numero) {
  let array = [];
  for(let i = 0; i < numero.length; i += 1){
    if(i === 0){
      array.push("(" + numero[i]);
    } else if (i === 1){
      array.push(numero[i] + ")");
    } else if (i === 6){
      array.push(numero[i] + "-")
    } else {
      array.push(numero[i]);
    }
    
  }
  return array;
}
console.log(generatePhoneNumber(numero));

// Desafio 12
function triangleCheck() {
  
}

// Desafio 13
function hydrate() {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
