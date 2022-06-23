// --- var = pode ser usada e altereada em qualquer lugar do código, também pode ser usada antes de declarar
// não é uma boa prática, preferir usar o let e const

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;

// --- let  = podem ser atualizadas, mas não declaradas novamente e possui escopo de bloco

// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// }

// console.log(area)

// --- const = não podem ser declaradas novamente ou atualizadas e possui escopo de bloco
const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area)