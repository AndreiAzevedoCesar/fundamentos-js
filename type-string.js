const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

// Pode ser usado tanto '' quanto "", mas "" também é usado para citação. Ex:

const citacaoExemplo = 'Andrei disse "oi!"';
console.log('--Citação exemplo:')
console.log(citacaoExemplo)

const citacao = "Meu nome é ";
const meuNome = "Andrei";

// concatenação (+)
console.log("--Concatenação:")
console.log(citacao + meuNome)

//template string OU template literal
//Template strings são envolvidas por (acentos graves) (` `) em vez de aspas simples ou duplas. 
//Podendo ser usado para interpolação de strings

var a = 5;
var b = 10;

console.log("--Template string:")
console.log(`Quinze é ${a + b}`)