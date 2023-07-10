/* 

Primitivos (imutáveis) -string,  number - boolean, undefined, null (bigint, symbol) são os valores copiados

*/
let nome = 'Otávio';
console.log(nome);

let nome = 'Vinicius';
console.log(nome[0])

let array = ['Vinicius','Cecilia']
console.log(array[1])

let a = 'A';
let v = a; // cópia
console.log(a,v)
a = 'Outra coisa';
console.log(a)



//Referência(mutável) - Array, Object, Function
//são valores passados por referência
let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a,b)


a.push(4);
console.log(a,b);

b.pop();
console.log(b);

console.log(c);

c.push(4);
console.log(c);




//copiando o valor de a para b de uma array
let a = [1, 2, 3];
let b = [...a];
console.log(a,b)
a.pop();
console.log(a,b)






let a = {
    nome: 'Vinicius',
    sobrenome: ' Luiz',

};

let b = a;
console.log(b)

a.nome ='NISSU'
console.log(b)




//copiando valores de uma array sem apontar para mesmo lugar
let a = {
    nome: 'Vinicius',
    sobrenome: ' Luiz',
};

let b = {...a};
console.log(b)

a.nome ='NISSU'
console.log(a,b)


