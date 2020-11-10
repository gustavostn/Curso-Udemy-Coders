//Taskas relacionados aos cod da aplicação

const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglifyCss = require('gulp-uglifycss')
const sass = require('gulp-sass')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')


appHtml = () =>{
   return gulp.src('src/**/*.html')
       .pipe(htmlmin({collapseWhitespace: true}))
       .pipe(gulp.dest('build'))
}


appCss = () =>{
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifyCss({"uglyComments": true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

appJs = () =>{
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}


appImg = () =>{
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/img'))
}
gulp.task('appHtml', appHtml)
gulp.task('appCss', appCss)
gulp.task('appJs', appJs)
gulp.task('appImg', appImg)

module.exports = {
    appHtml,
    appCss,
    appJs,
    appImg
}
