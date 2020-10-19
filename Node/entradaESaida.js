const anonimo = process.argv.indexOf('-a') !== -1

// console.log(anonimo);

if(anonimo){
    process.stdout.write('Desmascarado!')
    process.exit()
}else{
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const name = data.toString().replace('','-')
        process.stdout.write(`Fala ${name}!\n` )
        process.exit()
    })
}