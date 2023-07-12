// alert('Olá mundo')
// function array (nome,sobrenome,peso,altura) {

//     nome = nome,
//     sobrenome = sobrenome,
//     peso = peso,
//     altura = altura
//     resultado = [nome,sobrenome,peso,altura]
//     return resultado
// }; 
// console.log(array('vinicius','luiz','1','2'));



// function meuEscopo(){
//     let form = document.querySelector('.form');

//     form.onsubmit = function (evento) {
//         evento.preventDefault();
//         alert('Enviado');
//         console.log('Foi enviado');
//     }

// };

// meuEscopo();




//--1-Função que pega dados do "FORM" no HTML com query selector 
function meuEscopo(){
    let form = document.querySelector('.form'); 
    //Pegando o Form do HTML

    let resultado = document.querySelector('.resultado');
    //Pegando o resultado do HTML 
    
    let replicaResultado = document.querySelector('.replicaResultado')
    
    let pessoas = [];
    //Criando um array
    
    
    
    //----------------------------------------------------------------------------------------------------------
    let pessoasTest = [];

    function testeEvento(evento){


        evento.preventDefault();
        let nome = form.querySelector('.nome');


        pessoasTest.push =({nome: nome.value});

        testeEvento.innerHTML =+ `<h1> teste ${nome}</h1>`
        
        console.log(nome);  
        console.log(pessoasTest);  
    }

    //----------------------------------------------------------------------------------------------------------

    //Função para que vai pegar os dados do HTML
    function recebeEventoForm(evento){

        evento.preventDefault();
        //Colocando o parâmetro e o preventDefault() para não atualizar a página.

        let nome = form.querySelector('.nome');
        //criando variável "nome" e pegando valor com QuerySelector do class "nome" no HTML.

        let sobrenome = form.querySelector('.sobrenome');
         //criando variável "sobrenome" e pegando valor com QuerySelector do class "sobrenome" no HTML.    

        let peso = form.querySelector('.peso');
        //criando variável "peso" e pegando valor com QuerySelector do class "peso" no HTML.

        let altura = form.querySelector('.altura');
        //criando variável "altura" e pegando valor com QuerySelector do class "altura" no HTML.


        //Usando o "Array" (pessoas) + push para adicionar nele mesmo os valores nome.value,sobrenome.value,peso.value,altura.value nos campos nome,sobrenome,peso,altura
        pessoas.push({
            nome: nome.value, 
            //Ele está pegando o valor "nome" do "HTML" que vem do HTML e colocando na variável nome.
            sobrenome: sobrenome.value,
            //Ele está pegando o valor "sobrenome" do "HTML" com o sobrenome.value e colocando na variável sobrenome.
            peso: peso.value,
            //Ele está pegando o valor "peso" do "HTML" com o sobrenome.value e colocando na variável peso.
            altura: altura.value
            //Ele está pegando o valor "altura" do "HTML" com o altura.value e colocando na variável peso.
        });
        console.log('Campos que vem do FORM do HTML >',nome.value, sobrenome.value, peso.value, altura.value);
        console.log('O array que receberá as informações',pessoas)


        resultado.innerHTML += `<p>Nome:${nome.value} Sobrenome:${sobrenome.value} Peso:${peso.value} Altura:${altura.value}</p>`;
        //Com o innerHTML, o JS está inserindo esses campos no HTML com o class "resultado".

    form.addEventListener('submit', testeEvento);
    //O AddEventListener está no "form" esperando o "submit" para depois executar o "recebeEventoForm"
};
meuEscopo();
testeEvento();

}