/*O codigo seguinte define uma funcao inicial, delimitando o escopo para as variaves nao ser global
cria uma variavel que armazena os dados recebido do formulario e uma variavel para armazenar a div
cria um array, a funcao 
*/

function meuEscopo() {
    const fomr = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = fomr.querySelector('.nome');
        const sobrenome = fomr.querySelector('.sobrenome');
        const peso = fomr.querySelector('.peso');
        const altura = fomr.querySelector('.altura');


        pessoas.push({ //adicionando os dados dentre de um objeto dentro de um array
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value});

            resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

        

        console.log(pessoas);
        //console.log(nome.value, sobrenome, peso, altura);
    }

    fomr.addEventListener('submit', recebeEventoForm);


}
meuEscopo();