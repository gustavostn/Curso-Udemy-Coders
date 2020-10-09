let celulares = new Array('Iphone', 'Motorola', 'Samsung')
console.log(celulares);

celulares = ['Xiomi', 'Google', 'Huawei']
console.log(celulares[0])
console.log(celulares[1])
console.log(celulares[2])
console.log(celulares[3])

//jeitos de adicionar elementos no array
celulares[3] = 'LG'
celulares.push('Trovao')
console.log(celulares)

//Contar a quant de itens no array
console.log(celulares.length)

celulares[9] = 'Top'
console.log(celulares)

//Apagar elementos de um array

delete celulares[1] //Exclui o indice 1 (fica como undefined)
console.log(celulares)
celulares[1] = 'Iphone'

console.log(celulares)
celulares.splice(1,3) //A partir do indice 1 ele ira apagar 3 indices
console.log(celulares)
celulares.splice(1,0, 'Iphone', 'Huawei', 'LG') //Adicona itens a partir do indice 1
console.log(celulares)