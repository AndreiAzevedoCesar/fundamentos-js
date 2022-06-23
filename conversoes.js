// tipo de dado 
// booleanos 

// conversão implícita
const numero = 456;
const numeroString = "456"
//const numeroString = Number("456a");

//somente com == o JS faz a conversão implicíta 
console.log(numero == numeroString)

//Conversões
//Number()
//String()
console.log(numero + Number(numeroString))

// conversão explícita

console.warn(new Error('oi'))