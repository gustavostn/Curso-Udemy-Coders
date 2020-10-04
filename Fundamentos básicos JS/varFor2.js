var funcao = []

for(var i = 0; i <= 10; i++){
    funcao.push(function() {
        console.log(i)
    })
}

funcao[2]()
funcao[8]()



