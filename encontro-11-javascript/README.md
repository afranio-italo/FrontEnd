# Exercício — Modelagem de Produtos

## Objetivo

O exercício consiste em modelar uma coleção de produtos utilizando JavaScript, arrays, objetos e métodos de coleção.

## Estrutura dos produtos

Cada produto possui seis propriedades:

* `id`: identifica o produto.
* `nome`: nome do produto.
* `categoria`: categoria do produto.
* `preco`: preço unitário.
* `estoque`: quantidade disponível.
* `ativo`: indica se o produto está ativo.

## Métodos utilizados

### for...of

Foi utilizado para percorrer todos os produtos e mostrar o nome e a quantidade em estoque.

### map

Foi utilizado para criar um novo array contendo resumos dos produtos, com ID, nome e valor total em estoque.

### filter

Foram utilizados dois filtros:

1. encontrar produtos ativos;
2. encontrar produtos que possuem estoque disponível.

### find

Foram realizadas duas buscas:

1. busca pelo produto de ID 3;
2. busca pelo produto de ID 99, que não existe.

A segunda busca demonstra o tratamento de um resultado `undefined`.

### some

Foi utilizado para verificar se existe pelo menos um produto esgotado.

### every

Foi utilizado para verificar se todos os produtos possuem preço válido.

### reduce

Foram utilizados dois acumuladores:

1. calcular a quantidade total de produtos em estoque;
2. calcular o valor total do estoque.

### Spread

Foi utilizado para criar uma cópia atualizada de um produto sem modificar o objeto original.

## Conclusão

O exercício demonstra diferentes formas de percorrer, transformar, filtrar, localizar, verificar e acumular informações de uma coleção de objetos em JavaScript.
