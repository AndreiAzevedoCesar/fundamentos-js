// == (comparação implícita)

const numero = 5;
const texto = "5";

console.log(numero === texto)

//typeof
console.log(typeof numero)
console.log(typeof texto)

// == só compara o valor
/* === compara o valor e o tipo de dado - mais indicado de se utilizar por boas práticas e
realizar a conversão explicita */

// conversão explícita 

Number()
String()

/*Além das operações matemáticas básicas, do = para atribuição de valor em uma variável e 
das comparações com == e ===, utilizamos operadores para diversas outras tarefas de código, por exemplo:

   ||: Operador “ou”, retorna true caso uma condição seja válida;
   &&: Operador “e”, retorna true somente se todas as condições forem válidas;
   != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, 
da mesma forma que == e === retornam true ou false. */