// Exercício 1
let produto = {
    nome: "Caderno",
    preco: 25.90,
    estoque: 40
};

console.log(
    "Nosso produto é " +
    produto.nome +
    ", custa R$ " +
    produto.preco +
    " e temos " +
    produto.estoque +
    " em estoque."
);


// Exercício 2
produto.preco = produto.preco * 1.10; // aumenta 10%
produto.cor = "Azul"; // novo campo

console.log(produto);


// Exercício 3
function descreverProduto(produto) {
    return "O produto " + produto.nome + " custa R$ " + produto.preco + ".";
}

let produto1 = {
    nome: "Mouse",
    preco: 80
};

let produto2 = {
    nome: "Teclado",
    preco: 150
};

console.log(descreverProduto(produto1));
console.log(descreverProduto(produto2));



// Exercício 4
let produtos = [
    { nome: "Caneta", preco: 5 },
    { nome: "Caderno", preco: 20 },
    { nome: "Mochila", preco: 120 },
    { nome: "Borracha", preco: 3 }
];

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome + " - R$ " + produtos[i].preco);
}


// Exercício 5
let produtosCaros = [];

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].preco > 50) {
        produtosCaros.push(produtos[i]);
    }
}

console.log(produtosCaros);



// Exercício 6
let turma = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carlos", nota: 9 },
    { nome: "Daniela", nota: 5 },
    { nome: "Eduardo", nota: 7 }
];

let soma = 0;
let acimaMedia = 0;

for (let i = 0; i < turma.length; i++) {
    soma += turma[i].nota;
}

let media = soma / turma.length;

for (let i = 0; i < turma.length; i++) {
    if (turma[i].nota > media) {
        acimaMedia++;
    }
}

console.log("Média da turma: " + media);
console.log("Alunos acima da média: " + acimaMedia);
