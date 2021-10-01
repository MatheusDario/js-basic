const elementos = [
    {tag: 'p', texto: 'Texto dinamico..'},
    {tag: 'div', texto: 'Frase 2..'},
    {tag: 'section', texto: 'Frase 3..'},
    {tag: 'footer', texto: 'Frase 4..'}
];

const container = document.querySelector('.container'); //cria a vari dentro da classe selecionada esse e o lugar espe
const div = document.createElement('div'); // cria o elemento dentro do container usando appenchild

for (let i = 0; i<elementos.length; i++) {
    const {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div); //cria a div no lugar especifico