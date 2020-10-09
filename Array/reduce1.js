const alunos = [
    {nome: 'João', nota: 8.9, descMatricula: 20, bolsista: false},
    {nome: 'Gustavo', nota: 5.6, descMatricula: 60, bolsista: false},
    {nome: 'Pedro', nota: 10, descMatricula: 100, bolsista: true},
    {nome: 'Antonio', nota: 6.2, descMatricula: 10, bolsista: false},
    {nome: 'Carlos', nota: 8.3, descMatricula: 100, bolsista: true},
]

const bolsistas = alunos.map(a => a.nota).reduce(function( acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
}) 