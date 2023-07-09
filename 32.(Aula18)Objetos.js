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




//função para criar objetos de outra forma
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
};
let pessoa1 = criaPessoa('Vinícius','OliveiraAlmeida','24');
let pessoa2 = criaPessoa('Maria','OliveiraAlmeida','24');
let pessoa3 = criaPessoa('Eduarda','OliveiraAlmeida','24');
console.log(pessoa1,'\n',pessoa2,'\n', pessoa3);





// criando função dentro de um objeto para dizer nome e sobrenome
let pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 24,

    fala(nome) {
        console.log(`${this.nome} está falando oi`)
        console.log(`este sobrenome '${this.sobrenome}' pertence a este nome ${this.nome}` )
    }
};
pessoa1.fala();



//incrementando idade 
// criando função dentro de um objeto para dizer nome e sobrenome e incrementar idade
let pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 24,

    fala(nome) {
        console.log(`${this.nome} ${this.sobrenome} está falando oi`);
    },

    incrementaIdade() {
    this.idade++
    },

    fala(idade,nome){
        console.log(`A idade de ${this.nome} é ${this.idade}`)
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


