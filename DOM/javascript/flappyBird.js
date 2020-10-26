// AINDA NAO CONCLUIDO, CONTEM UM BUG

function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')
    //Elemento principal do HTML para se adicionar os itens criados 

    const borda = novoElemento('div', 'borda')
    //elemento para criar uma nova borda
    const corpo = novoElemento('div', 'corpo')
    //elemento para criar uma nova barreira

    this.elemento.appendChild(reversa ? corpo : borda)
    //caso nao for uma barreira inversa (barreira de cima) irá criar 1 o corpo e depois a borda
    this.elemento.appendChild(reversa ? borda : corpo)
    //Se for a barreira inversa (barreira de baixo) irá criar primeiro a borda e depois o corpo

    this.setAltura = altura => corpo.style.height = `${altura}px`
    //Alterar a altura do corpo (ele recebe a altura)
}

// const b = new Barreira(true)
// b.setAltura(100)
// document.querySelector('[wm-flappyBird').appendChild(b.elemento)
//TESTE DA CRIAÇÃO DA BARREIRA

function parDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    //definindo a barreira de cima
    this.inferior = new Barreira(false)
    //definindo a barreira de baixo

    this.elemento.appendChild(this.superior.elemento)
    //Para adicionar um item na DOM precisa chamar o elemento
    this.elemento.appendChild(this.inferior.elemento)



    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        //calcula o tamanho da altura superior

        const alturaInferior = altura - abertura - alturaSuperior
        //A altura inferior é calculada atraves da subtração da altura supeior, deixando assim sempre o mesmo tamanho de vao entre os tubos

        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
    this.getX = () => parseInt(this.elemento.style.left.split('px'[0]))
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getlargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

// const b = new parDeBarreiras(700, 200, 800)
// // 700 = altura max | 200 = Abertura | 400 = posicao do cubo X
// document.querySelector('[wm-flappyBird]').appendChild(b.elemento)
// // SOMENTE PARA TESTE

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new parDeBarreiras(altura, abertura, largura),
        new parDeBarreiras(altura, abertura, largura + espaco),
        new parDeBarreiras(altura, abertura, largura + espaco * 2),
        new parDeBarreiras(altura, abertura, largura + espaco * 3),
        new parDeBarreiras(altura, abertura, largura + espaco * 4)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //Retorna a barreira que saiu da tela (passou da dir p esq)
            if (par.getX() < - par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura() //sortea uma nova posicao entre as barreiras
            }
            const meio = largura / 2
            const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio

            if (cruzouMeio) notificarPonto()
            //Se cruzou meio for verdade a notificarPonto é chamado
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = './flappyBird.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px'[0]))
    //identificar a posição/altura que o passaro está
    this.setY = y => this.elemento.style.bottom = `${y}px`
    //Setando a posição do passaro 

    window.onkeydown = e => voando = true
    //Quando clicar a tecla o passaro irá voar
    window.onkeyup = e => voando = false
    //Quando nao clicar em nenhuma tecla ele ira cair

    this.animar = () => { //animação do passaro voando
        const novoY = this.getY() + (voando ? 5 : -5)
        //se estiver voando soma 5 se nao abaixa 5
        const alturaMaxima = alturaJogo - this.elemento.clientHeight
        //Altura maxima que o passaro pode voar (o passaro foi pré setado como 60px)

        if (novoY <= 0) {
            this.setY(0) //O passaro so nao ira passar da borda de baixo    
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima) // O passaro nao ira passar da borda de cima
        } else {
            this.setY(novoY) // O passaro ira sempre ficar dentro da area do jogo
        }
    }

    //Definindo a posição inicial do passaro
    //altura do jogo (pré setada como 1200px / 2 )***
    this.setY(alturaJogo / 2)
}


function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function FlappyBird() { //variavel para iniciar o jogo
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-FlappyBird]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()

    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))
    //Criando barreiras | 200 = espaçamento | 400 = Distancia entre barreiras
    //Contador de progresso, ao passar pela barreira ja soma +1

    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.append(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
    //adicionado itens ao HTML 

    function estaoSobrePostos(elementoA, elementoB) {
        const a = elementoA.getBoundingClientRect()
        const b = elementoB.getBoundingClientRect()

        const ladoEsquerdoBarreirA = a.left
        const ladoEsquerdoBarreiraB = b.left

        const larguraBarreiraA = a.width
        const larguraBarreiraB = b.width

        const horizontal = ladoEsquerdoBarreirA + larguraBarreiraA >= ladoEsquerdoBarreiraB
            && ladoEsquerdoBarreiraB + larguraBarreiraB >= ladoEsquerdoBarreirA

        const ladoCimaBarreiraA = a.top
        const ladoCimaBarreiraB = b.top

        const alturaBarreiraA = a.height
        const alturaBarreiraB = b.height

        const vertical = ladoCimaBarreiraA + alturaBarreiraA >= ladoCimaBarreiraB && ladoCimaBarreiraB + alturaBarreiraB >= ladoCimaBarreiraA

        return horizontal && vertical
    }//Calcula como ocorrerá a colisao 


    function colidiu(passaro, barreiras) {
        let colidiu = false
        barreiras.pares.forEach(parDeBarreiras => {
            if (!colidiu) {
                const superior = parDeBarreiras.superior.elemento
                const inferior = parDeBarreiras.inferior.elemento
                colidiu = estaoSobrePostos(passaro.elemento, superior) ||
                    estaoSobrePostos(passaro.elemento, inferior)
                //checa se o passaro esta sobreposto com a barreira
            }
        })
        return colidiu
    }





    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new FlappyBird().start()

// const barreiras = new Barreiras(700, 1200, 200, 400)
// //criação de novas barreiras
// // 700 = altura max das barreiras | 1200 = spawn fora da area do jogo | 200 = espaçamento entre barreiras | 400 = espalo entre barreiras vizinhas 

// const passaro = new Passaro(700)
// //700 = altura que o passaro ira nascer (um pouco acima do meio)***

// const areaDojogo = document.querySelector('[wm-flappyBird]')
// //Selecionando a area do jogo que foi pré setado no CSS

// areaDojogo.appendChild(passaro.elemento)
// //Adicionado (com o appendChild() o passaro como novo elemento)

// areaDojogo.appendChild(new Progresso().elemento)

// barreiras.pares.forEach(par => areaDojogo.appendChild(par.elemento))
// //adicionando as barreiras como novo elemento

// // setInterval(() =>{
// //     barreiras.animar()
// //     passaro.animar()
// // },20)
// // Onde ocorre a animação das barreiras e dos passaros