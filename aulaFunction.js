// Exercício 1 

function saudacao(nome) {
    return `Olá, ${nome}! Bons estudos.`;
}
let nome = prompt("Digite seu nome:");
console.log(saudacao(nome));

// Exercício 2 
function Par(numero) {
    return numero % 2 === 0;
}
let numero = Number(prompt("Digite um número:"));
if (Par(numero)) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

// Exercício 3 
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
function situacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));
let media = calcularMedia(nota1, nota2, nota3);
console.log("Média:", media);
console.log("Situação:", situacao(media));

// Exercício 4 

function soma(a, b) {
    return a + b;
}
function subtrai(a, b) {
    return a - b;
}
function multiplica(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero";
    }

    return a / b;
}

let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));
console.log("Soma:", soma(a, b));
console.log("Subtração:", subtrai(a, b));
console.log("Multiplicação:", multiplica(a, b));
console.log("Divisão:", divide(a, b));


// Exercício 5 

function triploDeclaracao(x) {
    return x * 3;
}
const triploExpressao = function(x) {
    return x * 3;
};
const triploArrow = (x) => x * 3;
let valor = Number(prompt("Digite um número para triplicar:"));
console.log("Triplo declaração:", triploDeclaracao(valor));
console.log("Triplo expressão:", triploExpressao(valor));
console.log("Triplo arrow:", triploArrow(valor));


// Exercício 6 
function fatorial(n) {
    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}
let fat = Number(prompt("Digite um número para calcular o fatorial:"));
console.log("Fatorial:", fatorial(fat));

// Exercício 7

function Primo(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
let numeroPrimo = Number(prompt("Digite um número:"));

if (ehPrimo(numeroPrimo)) {
    console.log("É primo");
} else {
    console.log("Não é primo");
}

let limite = Number(prompt("Digite até qual número procurar primos:"));
for (let i = 2; i <= limite; i++) {
    if (Primo(i)) {
        console.log(i);
    }
}
