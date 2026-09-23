const produtos = [
  {
    id: 1,
    nome: "Teclado Mecânico",
    categoria: "Periféricos",
    preco: 250,
    estoque: 8,
    ativo: true
  },
  {
    id: 2,
    nome: "Mouse Gamer",
    categoria: "Periféricos",
    preco: 150,
    estoque: 15,
    ativo: true
  },
  {
    id: 3,
    nome: "Monitor 24 Polegadas",
    categoria: "Monitores",
    preco: 900,
    estoque: 0,
    ativo: true
  },
  {
    id: 4,
    nome: "Headset Gamer",
    categoria: "Áudio",
    preco: 300,
    estoque: 5,
    ativo: true
  },
  {
    id: 5,
    nome: "Webcam Full HD",
    categoria: "Câmeras",
    preco: 350,
    estoque: 3,
    ativo: false
  }
];


function calcularValorEstoque(produto) {
  return produto.preco * produto.estoque;
}


console.log("===== LISTA DE PRODUTOS =====");

for (const produto of produtos) {
  console.log(
    `${produto.nome} — Estoque: ${produto.estoque} unidades`
  );
}


const resumos = produtos.map((produto) => ({
  id: produto.id,
  nome: produto.nome,
  valorEstoque: calcularValorEstoque(produto)
}));

console.log("===== RESUMOS DOS PRODUTOS =====");
console.table(resumos);


const produtosAtivos = produtos.filter((produto) => {
  return produto.ativo;
});

console.log("===== PRODUTOS ATIVOS =====");
console.table(produtosAtivos);


const produtosComEstoque = produtos.filter((produto) => {
  return produto.estoque > 0;
});

console.log("===== PRODUTOS COM ESTOQUE =====");
console.table(produtosComEstoque);


const produtoEncontrado = produtos.find((produto) => {
  return produto.id === 3;
});

console.log("===== PRODUTO ENCONTRADO =====");
console.log(produtoEncontrado);


const produtoInexistente = produtos.find((produto) => {
  return produto.id === 99;
});

console.log("===== BUSCA INEXISTENTE =====");

if (produtoInexistente === undefined) {
  console.log("Produto com ID 99 não encontrado.");
} else {
  console.log(produtoInexistente);
}


const existeProdutoEsgotado = produtos.some((produto) => {
  return produto.estoque === 0;
});

console.log("===== SOME =====");
console.log(
  `Existe produto esgotado? ${existeProdutoEsgotado}`
);


const todosPossuemPrecoValido = produtos.every((produto) => {
  return produto.preco > 0;
});

console.log("===== EVERY =====");
console.log(
  `Todos possuem preço válido? ${todosPossuemPrecoValido}`
);


const quantidadeTotal = produtos.reduce((total, produto) => {
  return total + produto.estoque;
}, 0);

console.log("===== REDUCE 1 =====");
console.log(
  `Quantidade total de produtos em estoque: ${quantidadeTotal}`
);


const valorTotalEstoque = produtos.reduce((total, produto) => {
  return total + calcularValorEstoque(produto);
}, 0);

console.log("===== REDUCE 2 =====");
console.log(
  `Valor total do estoque: R$ ${valorTotalEstoque.toFixed(2)}`
);


const produtoOriginal = produtos.find((produto) => {
  return produto.id === 1;
});

const produtoAtualizado = {
  ...produtoOriginal,
  estoque: produtoOriginal.estoque + 5
};

console.log("===== ATUALIZAÇÃO =====");

console.log("Produto original:");
console.log(produtoOriginal);

console.log("Produto atualizado:");
console.log(produtoAtualizado);


console.log("===== VERIFICAÇÃO =====");

console.log(
  `Estoque original: ${produtoOriginal.estoque}`
);

console.log(
  `Estoque atualizado: ${produtoAtualizado.estoque}`
);