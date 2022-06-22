// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log("--Operação matemática:")
console.log(operacaoMatematica)

// ponto flutuante

const numeroPontoFlutuante = 3.3;

// pode ser declarado utilizando somente o . ao invés de colocar o 0.5
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log("--Ponto flutuante:")
console.log(novaOperacao)

// NaN -> Not A Number (não é um número)

const alura = "Alura";
console.log("--Não é um número:")
console.log(alura * primeiroNumero)