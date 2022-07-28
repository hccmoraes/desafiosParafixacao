// Crie uma função que receba um objeto (nome, sobrenome, idade) e delete algum
// atributo, caso esteja vazio (null).

function deletaObjetos(objeto) {
    if (objeto.name === ' ') {
        delete objeto.name
        console.log('Informe o nome')
    } else if (objeto.surnome === ' ') {
        delete objeto.surnome
        console.log('Informe o sobrenome')
    } else if(objeto.age === 0){
        delete objeto.age
        console.log('Informe a idade')
    } else {
        console.log('Todos os itens foram preenchidos')
    }
    console.log(objeto)
}

deletaObjetos({ name: 'Pedro', surnome: ' ' , age: 11 })