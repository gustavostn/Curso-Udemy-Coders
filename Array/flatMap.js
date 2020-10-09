const escola = [{
    turma: '3a',
    alunos: [{
        nome: 'Pedro',
        nota: 5
    }, {
        nome: 'Amanda',
        nota: 9
    }, {
        nome: 'Leticia',
        nota: 3
    }],
}, {
    turma: '3b',
    alunos: [{
        nome: 'Jose',
        nota: 7.7
    }, {
        nome: 'Patricia',
        nota: 10
    }, {
        nome: 'Leticia',
        nota: 7.9
    }]
}]

const getNotaAluno = alunos => alunos.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1);


