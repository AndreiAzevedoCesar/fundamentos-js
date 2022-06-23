const x = 0;

//Boolean
const usuarioLogado = true
const contaPaga = false

//truthy ou falsy
//não são exatamente booleanos, mas podem ser considerados falsos

//Principalmente em liguagens de banco
//0 -> false
//1 -> true


console.log(0 == false)//retorna true
console.log("" == false)//retorna true
console.log(1 == true)


console.log("--null e undefinned")
//undefined -> não foi definida, pode ser um erro ou função sem return
//null -> vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

console.log("Quando o undefined está em sua forma pura")

let numero = 3;
let texto = "Alura";

console.log(typeof numero); //var o tipo de dado da variável
console.log(typeof texto);


console.log(typeof minhaVar);
console.log(typeof varNull);
