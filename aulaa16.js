//Arrays (básico)

// Oque é um Array ?
// Array = Lista
//                 0      1      2
var alunos = ['Luiz','Maria','João'];
console.log(alunos);





var nome = 'Vinicius Luiz'
//            012345678910111213




let nome = 'Vinicius Luiz'
//            0123456789101112
console.log(nome[0]);




//editando valor de array
//                 0      1      2
let alunos = ['Luiz','Maria','João'];
alunos[0] ='Vinicius'
console.log(alunos)




//adicionando mais elemento em um array
let alunos = ['Vinicius','Maria-Celilia','João'];
alunos[3] = 'Eduardo'
console.log(alunos)






//sabendo tamanho do array
let alunos = ['Vinicius','Maria-Celilia','João'];
console.log(alunos.length)



//
//declarando variável em array 
let alunos = ['Vinicius','Maria-Celilia','João'];
console.log(alunos.length,         "antes da inserção")
//inserindo mais elementos em um array
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Pedro';
console.log(alunos.length,         "depois da inserção")