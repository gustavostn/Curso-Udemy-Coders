const gulp = require('gulp')
const {series} = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')


function transformacaoTS () {
    return tsProject.src()
        .pipe(tsProject()) //Realiza o processo de compilação
        .pipe(gulp.dest('build')) //Envia para a pasta destino
}

exports.default = series(transformacaoTS)
 