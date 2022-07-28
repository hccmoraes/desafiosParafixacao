//Transforma as letras de um nome para todas as letras maiusculas.

let nome = 'Pedro'

let nomeMaiuscula = ''

for (let i = 0; i < nome.length; i++){
    nomeMaiuscula += nome[i].toUpperCase()
}

console.log(nomeMaiuscula)
