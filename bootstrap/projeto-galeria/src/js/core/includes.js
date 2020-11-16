import $ from 'jquery'

const loadHtmlSuccessCallbacks = [] //Array de funções callbacks que serao chamadas quando funções forem feitas de formas bem sucedidas 

export function onLoadHtmlSuccess(callback){ //exportando a função
    if(!loadHtmlSuccessCallbacks.includes(callback)){ //Se a call NAO estiver incluida no Array
        loadHtmlSuccessCallbacks.push(callback) //Irá adicionar a callback no array
    }
}

function loadIncludes(parent) { //Responsavel por ler os atributos do wm-include (parent = a tag que com  wm-include)
    if (!parent) parent = 'body' //Se o parametro parent estiver vazio, ele irá procurar dentro do body
    $(parent).find('[wm-include]').each(function (i, e) { //Realiza a procura do wm-include dentro dos elementos 
        const url = $(e).attr('wm-include')  //ira receber o elemento que tem o wm-include
        $.ajax({
            url,
            success(data) { //caso seja bem sucedida | Irá chamar as callbacks dps do sucesso da leitura de um HTML
                $(e).html(data) //insere o elemento dentro do html
                $(e).remove('wm-include') //excluindo a propriedade wm-include, evitando ser interpretado novamente
                loadHtmlSuccessCallbacks.forEach( 
                    callback => callback(data))//Selecionando cada uma das callbacks e invocando com os dados que obtive


                loadIncludes(e) //Irá realizar um novo ciclo para ver se dentro do elemento que ocorreu a ação tem um wm-include
            }
        })
    })
}

loadIncludes()