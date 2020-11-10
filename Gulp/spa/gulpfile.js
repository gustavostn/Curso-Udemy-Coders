const gulp = require('gulp')
const {series, parallel} = require('gulp')
const {appHtml, appCss,appJs,appImg} = require('./gulpTasks/app')
const {dependenciasCSS,dependenciasFontes} = require('./gulpTasks/dependencias')
const {monitoraArquivo,servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHtml,appCss,appJs,appImg),
        series(dependenciasCSS, dependenciasFontes)   
    ),
    servidor,
    monitoraArquivo,
)
