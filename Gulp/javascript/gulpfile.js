const gulp = require('gulp')
const {series} = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

padrao = (cb) => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //Não irá transferir os comentarios
            presets: ["env"] // Irá usar o JS mais recente         
        }))
        .pipe(uglify()) // Reduz o cod ao max
        .pipe(concat('calculadora.min.js')) // Arquivo final depois dos pipe
        .pipe(gulp.dest('build'))
    
}
    function fim(cb){ //Serve somente para identificar o FIM do processo
        console.log('FIM!');
        return cb()
    }

exports.default = series(padrao, fim)