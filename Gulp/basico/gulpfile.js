/* Realizar atividades em ordem

const gulp = require('gulp')
const series = gulp.series
*/


//Realizar a atividades em paralelo:
const gulp = require('gulp')
const {series, parallel} = require("gulp")


const antes1 = cb => {
    console.log('Tarefa antes 1')
    return cb()
}

const antes2 = cb =>{
    console.log('Tarefa antes 2')
    return cb()
}

function copiar(cb){
    // gul.src([...]) Indica onde está o arquivo raiz
    //Seleciona somente os arquivos que forem indicados.
    // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt') 
    //Selecionada tds os arquivos txt dentro da pasta A.
    /*Realizar transformações nos arquivos escolhidos
    Pode ser criado uma função que aplica as modificações desejadas
    .pipe(imagemModifica2())  
    .pipe(imagemPretoEBranco()) */ 
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb =>{
    console.log('FIM')
    return cb()
}

/*Reliazar atividades em ordem
module.exports.default = series(
        antes1,
        antes2,
        copiar,
        fim,
)
*/

//Executar taredas em paralelelo
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)
