//Funções em Javascript 


//Criando uma função
function saudacao () {
    console.log('Bom dia!')

}
saudacao();



//Criando parâmetro na função para dizer algo
function saudacao (nome){
    console.log(nome)
}
saudacao("Olá");

//Criando parâmetro na função para dizer algo com cráse
function saudacao (nome){
    console.log(`Bom dia ${nome}!`)
}
saudacao("Olá");
saudacao("Vinícius")
saudacao("Maria Cecilia")








//retornando valor de função    
function saudacao (nome){
    console.log(`Bom dia ,${nome}!`)
    return nome;
}
saudacao("valor 1");
let variavel = saudacao('Vinicius')
console.log(variavel, "console.log1")

// saudacao("valor2");
// variavel = saudacao('Cecilia');
// console.log(variavel, "console.log2")
// console.log(variavel, " |valor 3 retornado pelo return dentro da função")



//function de somar 
function soma(x, y) {
    resultado = x + y
    console.log(resultado)
    return `retorno da função${soma}`
}
soma(10,10);





//Function de somar retornando parametros

function soma(x, y) {
    let resultado = x + y;
    console.log(`A soma é ${resultado}`)
    return ` function retornando ${x + y}`;
};

soma(5,5)
soma(10,10)
console.log(soma(20,20));









//função soma com return concatenado
function soma(x, y) {
    let resultado = x + y;
    console.log('antes do resultado...')
    return `'R: a soma é':${resultado}`;
};

console.log(soma(2,2));
console.log(soma(1,1));
