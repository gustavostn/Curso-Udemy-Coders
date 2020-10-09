const jogadores = ['Stn', 'Rafex', 'Dmc', 'Tortug4']
jogadores.pop() //Remove o ultimo elemento do array
console.log(jogadores);

jogadores.push('Grav') //Adiciona um elemento na ultima posicao
console.log(jogadores);

jogadores.shift() //Remove o primeiro elemento de um array
console.log(jogadores);

jogadores.unshift('StnGod') //Adiciona um elemento na primeira casa do array
console.log(jogadores);

jogadores.splice(2, 0, 'Beppu', 'Visiting') //Apos o elemento 2, irá adicionar mais conteudo ao array
console.log(jogadores);

jogadores.splice(3,2) ///Remove o elemento 3 e mais 1
console.log(jogadores);

const jogadoresGold = jogadores.slice(3) //Novo array
console.log(jogadoresGold)

const jogadoresBanidos = jogadores.slice(1,3) //Do elemente 1 ao 2 irao para o novo array
console.log(jogadoresBanidos)