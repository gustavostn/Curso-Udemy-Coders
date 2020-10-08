// Factory simples, usado para evitar repeticao de obj 
// uma funcao que retona um obj

criarPessoa = () => {
    return {
        nome: 'Ana',
        Idade: 19
    }
}
console.log(criarPessoa());
