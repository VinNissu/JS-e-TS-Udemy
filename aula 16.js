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





//colocando elemento no final do array
//                 0      1      2
let alunos = ['Luiz','Maria','João'];
alunos.push('Luiza') //adiciona no final
console.log(alunos)






//colocando elemento no começo do array
let alunos = ['Luiz','Maria','João'];
alunos.unshift('Luiza') // adiciona no começo
console.log(alunos)



//removendo do fim do array
let alunos = ['Luiz','Maria','João'];
alunos.pop() // remove do final
console.log(alunos)



//salvando o elemento que foi removido do array
let alunos = ['Luiz','Maria','João'];
let removido /*recebendo oque vai ser removido*/ = alunos.pop() // remove do final
console.log(removido)
console.log(alunos)





//Apagando um indice (1 = Maria)
let alunos = ['Luiz','Maria','João'];
delete alunos[1];
console.log(alunos)
console.log(alunos[50])





//Fatiando a array
//              0       1       2       3
let alunos = ['Luiz','Maria','João','Vinicius'];
let fatia = alunos.slice(0,3)
console.log(fatia)



//Fatiando a array pelo negativo        
//              0       1       2       3
let alunos = ['Luiz','Maria','João','Vinicius'];
let fatia = alunos.slice(0,-3)
console.log(fatia)