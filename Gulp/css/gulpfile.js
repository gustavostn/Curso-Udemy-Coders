const gulp = require('gulp')
const {series} = require('gulp')
const sass = require('gulp-sass')
const ugflifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const {parallel} = require('gulp')

transformacaoCSS = () =>{
    return gulp.src('src/sass/index.scss') //Selecionando somente o index do sass
        .pipe(sass().on('erro', sass.logError)) //Em caso de erro irá aparecer uma mensagem
        .pipe(ugflifycss({"uglyComments": true})) //Irá diminuir o max o tamanho do arq
        .pipe(concat('estilo.min.css')) //Irá colocar todos os arquivos dentro de sass em so 1 e o nome deste arquivo será estilo.min.css b  
        .pipe(gulp.dest('build/CSS')) //Destino do arquivo final

}

copiarHTML = () =>{
return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)