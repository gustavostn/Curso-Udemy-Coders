//Simulando a função do forEach
Array.prototype.forEach2 = function(callbaclk){
    for(let i = 0; i < this.length; i++){
        callbaclk(this[i], i, this)
    }
}
 
const carrosDoAno = ['X1', 'Jetta', 'Bravo', 'Evoque']

carrosDoAno.forEach2(function (nome, indice){
    console.log(` ${indice + 1} - ${nome}`);
})

