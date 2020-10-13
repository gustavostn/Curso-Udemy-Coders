require('./global')
console.log(atributo.saudacao());
console.log(atributo.aplicacao());

atributo.saudacao = "possivel para alteração" //Sem o ObjectFreeze()
console.log(atributo.saudacao);
