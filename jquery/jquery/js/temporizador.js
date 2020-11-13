(function ($) {
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!', //Caso nao tenha passado nada a mensagem ira ser essa
            horario: '22:35:45' //mesma coisa para o horarioAlvo
        }, opcoes)
        
        //Elementos para hora
        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        
        //Elementos para minutos
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        
        //Elementos para segundos
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        //Divisores de hora e minutos (:)
        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')

        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade, mensagem) 
        
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/) //Padrao para pegar hora minuto e segundos
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        console.log(horarioAlvo);

        let temporizador = setInterval(() => {
            const agora = new Date() //selecionando o horario atual
            const alvo = new Date() //Hora alvo (retorna em array) 
            alvo.setHours(horarioAlvo[1]) //setando a hora como a valor 1 do array
            alvo.setMinutes(horarioAlvo[2])//setando a hora como a valor 2 do array
            alvo.setSeconds(horarioAlvo[3])//setando a hora como a valor 3 do array

            const diferencaEmMili = alvo.getTime() - agora.getTime() //indicar a diferença entre horario atual e horarioAlvo
           
            if(diferencaEmMili >= 0){
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
                horaDezena.html(diferenca[1][0]) //Retorna o horario
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            }else{
                clearInterval(temporizador)
            }
        },1000) //att a cada 1s

        return this
    }
})(jQuery)

