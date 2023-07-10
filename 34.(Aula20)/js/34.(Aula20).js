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



function meuEscopo(){
    let form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');
    
    let pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        let nome = form.querySelector('.nome');
        let sobrenome = form.querySelector('.sobrenome');
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(nome.value, sobrenome.value, peso.value, altura.value);
        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
};
meuEscopo();




