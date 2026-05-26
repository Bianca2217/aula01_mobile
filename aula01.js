//exercício 01
const nome = "Bianca";
const idade = 16;
const cidade = "Cascavel";
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);

//exercício 02
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
console.log(`Soma: ${somar(10, 5)}`);
console.log(`Subtração: ${subtrair(10, 5)}`);
console.log(`Multiplicação: ${multiplicar(10, 5)}`);
console.log(`Divisão: ${dividir(10, 5)}`);

//exercício 03
const input = require('readline-sync');
function classificar(nota) {
  if (nota >= 7) {
    return "Aprovado";
  } else if (nota >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}
let nota = Number(input.question("Digite nota do aluno: "));
console.log("Resultado:", classificar(nota));

//exercício 04
function tabuada (numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
};
tabuada(5);

//exercício 05
let valor;
if (valor) {
    console.log("Tem valor");
}
valor = 10;
if (valor) {
    console.log("Tem valor");
}
