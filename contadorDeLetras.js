//Faça uma função que conte a quantidade de vezez que uma letra aparece em um nome.

function contadorDeLetras (letra, string) {
    count = 0;
    for (var i in string){
        if(letra == string[i]){
            count++
        }
    }console.log(`No nome ${string}, a letra ${letra}, aparece ${count} vez(s)`)
}

contadorDeLetras('a', 'Fabiana')

