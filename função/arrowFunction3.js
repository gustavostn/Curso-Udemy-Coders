let compararComThis = function(parametro){
    console.log(this === parametro);
}
compararComThis(global)