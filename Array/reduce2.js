const alunos = [
    {nome: 'João', nota: 8.9, descMatricula: 20, bolsista: false},
    {nome: 'Gustavo', nota: 5.6, descMatricula: 60, bolsista: false},
    {nome: 'Pedro', nota: 10, descMatricula: 100, bolsista: true},
    {nome: 'Antonio', nota: 6.2, descMatricula: 10, bolsista: false},
    {nome: 'Carlos', nota: 8.3, descMatricula: 100, bolsista: true},
]


//Desafio 1: Algu aluno é bolsista?
const alunosBolsitas = (resultado, bolsista) => resultado && bolsista 
console.log(alunos.map(a => a.bolsista).reduce(alunosBolsitas));

//Desafio 2: Algum aluno é bolsista?
const alunosBolsista2 = (resultado, bolsista) => resultado || bolsista 
console.log(alunos.map(a => a.bolsista).reduce(alunosBolsista2))