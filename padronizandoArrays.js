// Precisamos pradronizar a lista de alunos para conter apenas letras maiusculas
// -['ana julia', 'Caio Vinicius', 'BIA Silva']

let nomes = ['ana Julia', 'Caio Vinicius', 'BIA Silva']

const nomesPadronizados = nomes.map(nome => nome.toLocaleUpperCase())

console.log(nomesPadronizados)
 
