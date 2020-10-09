const alunos = [
    { nome: 'João', nota: 8.9, descMatricula: 20, bolsista: false },
    { nome: 'Gustavo', nota: 5.6, descMatricula: 60, bolsista: false },
    { nome: 'Pedro', nota: 10, descMatricula: 100, bolsista: true }
]


//Imperativo -> So pode usar nesta situação
let notaAlunos = 0
for (let i = 0; i <= alunos.length; i++) {
    notaAlunos += alunos[i].nota
}
console.log(notaAlunos / alunos.length)


// Declarativo -> O codigo pode ser reutilizavel 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);


