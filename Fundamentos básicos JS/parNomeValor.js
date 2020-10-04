// par nome/valor

const ola = 'Olá' //Contexto léxico 1 
console.log(ola)

function exec(){
    const ola = "Hello" // contexto léxico 2
    return ola
    
}

//Objs sao grupos aninhhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 85,
    peso: 60,
    endereco: {
        logradouro: 'Alameda fernandes',
        numero: 1892
    }
}

console.log(ola)
console.log(exec())
console.log(cliente)