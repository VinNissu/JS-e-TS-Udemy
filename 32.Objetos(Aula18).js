// 
let arrayPush = [1,2,3];
console.log(arrayPush,'Push');
arrayPush.push[4]
arrayPush[0] ='Luiz';
console.log(arrayPush,'Push');


//
let array = [1,2,3];
console.log(array,'unshift');
array[0] ='Luiz';
array.unshift[4];
console.log(array,'unshift');





//Objeto em javascript
let pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 24
};
console.log(pessoa1.nome);




//função para criar objetos
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};
let pessoa1 = criaPessoa('Vinícius','OliveiraAlmeida','24');
let pessoa2 = criaPessoa('Maria','OliveiraAlmeida','24');
let pessoa3 = criaPessoa('Eduarda','OliveiraAlmeida','24');
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);

