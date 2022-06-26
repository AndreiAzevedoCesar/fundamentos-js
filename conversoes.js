// tipo de dado 
// booleanos 

// conversão implícita
const numero = 456;
const numeroString = "456"

//somente com == o JS faz a conversão implicíta 
console.log(numero == numeroString)

//Conversão explicita
//Number()
//String()
console.log(numero + Number(numeroString))

//const numeroString = Number("456");
//const numeroString = Number("456a");  NaN

console.warn(new Error('oi'))