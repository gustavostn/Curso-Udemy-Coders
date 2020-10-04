function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {min: 98, max: 100}
console.log(rand(obj)) // redefino min e max
console.log(rand({})) // usei as definições ja feitas
console.log(rand({min: 555})) //Refeni apenas umas 
