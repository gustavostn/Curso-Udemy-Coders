
function pessoa() {
    this.idade = 0

    
    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new pessoa



function contador() {
    this.cont = 0

    const self = this //Colocar o this em uma constante para dar um unico sentido a ele

    setInterval(function () {
        self.cont++
        console.log(self.cont)
    }, 1000)
}
new contador