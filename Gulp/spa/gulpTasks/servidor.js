const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

servidor = () =>{
    return gulp.src('build')
    .pipe(webserver({
        port: 8080,
        open: true,
        livereload: true,
    }))
}
monitoraArquivo = (cb) =>{
    watch('src/**/*.html', () => gulp.series('appHtml')())
    watch('src/**/*.scss', () => gulp.series('appCss')())
    watch('src/**/*.js', () => gulp.series('appJs')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIimg')())
    return cb()
}

module.exports = {
    monitoraArquivo,
    servidor
} 