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






