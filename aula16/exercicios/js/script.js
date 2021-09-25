/*pegar as informacoes inseridas e criar um objeto
e colocar o objeto dentro do array pessoas e cada vez que for enviado
add o obj dentro do array e o que foi adicionado colocar na div de resultado
como paragrafo
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