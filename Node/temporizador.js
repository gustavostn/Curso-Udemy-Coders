const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 3', function (){
    console.log('Executando tarefa 1!', new Date().getSeconds());
})
// */5 = De 5 em 5 seg
// 1º * = Em qq minuto
// 12horas
// dia do mes
//mes 
//executar na quarta feira 0 domingo e 6 sabado

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando a tarefa 1');
},2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,6)]
regra.hour = 9
regra.second = 5

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Exucutando tarefa 2!', new Date().getSeconds());
})