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
saudacao("Olá");

let variavel = saudacao ("Luiz")
console.log(variavel, " |valor retornado pelo return dentro da função")




