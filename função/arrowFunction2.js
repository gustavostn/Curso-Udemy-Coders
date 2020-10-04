function contador() {
    this.cont = 0

    setInterval(() => {
        this.cont++
        console.log(this.cont);
    }, 1000)
}
new contador

 //Na funcao arrow o this nao varia!