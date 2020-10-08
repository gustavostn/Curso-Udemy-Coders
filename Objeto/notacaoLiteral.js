const a = 1
const b = 2
const c = 3

//antes
const obj1 = { a: a, b: b, c: c }

//Depos do ES2015
const obj2 = { a, b, c }
console.log(obj1, obj2);

const disciplina = 'Matematica'
const valorNota = 10
const totalFaltas = 5

const obj3 = {}
obj3[disciplina] = valorNota
console.log(obj3)

const obj4 = { [disciplina]: totalFaltas }
console.log(obj4)

const obj5 = {
    funcao() {
        //...
    }
}

console.log(obj5)
