function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function criaBarreira(reversa = false) {
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

// const b = new criaBarreira(true)
// b.setAltura(100)
// document.querySelector('[wm-flappyBird').appendChild(b.elemento)
//TESTE DA CRIAÇÃO DA BARREIRA

function parDeBarreiras(altura, abertura,x){
    this.elemento = novoElemento('div','par-de-barreiras')    

    this.superior = new criaBarreira(true)
    //definindo a barreira de cima
    this.inferior = new criaBarreira(false)
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
    
    this.getx = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = () => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)

}

const b = new parDeBarreiras(700, 200, 800)
// 700 = altura max | 200 = Abertura | 400 = posicao do cubo X
document.querySelector('[wm-flappyBird]').appendChild(b.elemento)