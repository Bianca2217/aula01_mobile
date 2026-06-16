// Exercício 1

let compras = ["arroz", "feijão", "macarrão", "leite", "café"];
for (let i = 0; i < compras.length; i++) {
    console.log(`Item ${i + 1}: ${compras[i]}`);
}

// Exercício 2

let quantidade = Number(prompt("Quantos números você deseja digitar?"));
let numeros = [];
for (let i = 0; i < quantidade; i++) {
    let n = Number(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(n);
}
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
let media = soma / numeros.length;
console.log("Números:", numeros);
console.log("Soma:", soma);
console.log("Média:", media);

// Exercício 3

let valores = [10, 5, 25, 8, 30];
let maior = valores[0];
for (let i = 1; i < valores.length; i++) {
    if (valores[i] > maior) {
        maior = valores[i];
    }
}
console.log("Maior valor:", maior);


// Exercício 4 

let numerosPares = [1, 2, 3, 4, 5, 6, 8, 10];
let pares = 0;
for (let i = 0; i < numerosPares.length; i++) {

    if (numerosPares[i] % 2 === 0) {
        pares++;
    }

}
console.log("Quantidade de números pares:", pares);


// Exercício 5

let nomes = [];
while (true) {
    let nome = prompt("Digite um nome (ou 'fim' para parar):");

    if (nome === "fim") {
        break;
    }

    nomes.push(nome);
}
console.log("Nomes cadastrados:");

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// Exercício 6 

let notas = [];
for (let i = 0; i < 5; i++) {
    let nota = Number(prompt(`Digite a ${i + 1}ª nota:`));
    notas.push(nota);
}

let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}
let mediaTurma = somaNotas / notas.length;
let acimaMedia = [];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > mediaTurma) {
        acimaMedia.push(notas[i]);
    }

}
console.log("Média da turma:", mediaTurma);
console.log("Notas acima da média:", acimaMedia);
console.log("Quantidade acima da média:", acimaMedia.length);
