criaProduto = (nome, preco) => {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criaProduto('Celular', 2599));
console.log(criaProduto('Tablet', 1900));
