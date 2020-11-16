import $ from 'jquery'
import { onLoadHtmlSuccess } from '../core/includes'

const duration = 600;
function filterByCity(city) { //Filtrar fotos por cidade
    $('[wm-city]').each(function (i, e) { //Ira realizar um each no wm-city buscando os valores do atributo
        const isTarget = $(this).attr('wm-city') === city
            || city === null //Identificando se o elemento é valido para ser alterado 
        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })

        }
    })
}

$.fn.cityButtons = function () {
    const cities = new Set  //O set nao possui repeticao, ou seja ira pegar NY, FLP e RJ apenas uma vez
    $('[wm-city]').each(function(i, e) {
        cities.add($(e).attr('wm-city')) //Pegando o valor informado dentro da wm-city
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)
        btn.click(e => filterByCity(city))
        return btn
    })

    const btnAll = $('<button>') //Criando botao que ira mostrar todas as imgs
        .addClass(['btn', 'btn-info',]).html('Todas') //Adc classes aos botoes
    btnAll.click(e => filterByCity(null))

    btns.push(btnAll) //Adicionando o botao que mostrará todas as imgs no array de botoes

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)
    return this

}

onLoadHtmlSuccess(function(){
    $('[wm-city-buttons').cityButtons()
})

