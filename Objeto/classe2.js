class avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class pai extends avo {
    constructor(sobrenome, corCabelo = 'castanho') {
        super(sobrenome)
        this.corCabelo = corCabelo
    }
}

class filho extends pai {
    constructor() {
        super('Pereira')

    }
}
const Filho = new filho
console.log(Filho);