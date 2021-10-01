const elementos = [
    {tag: 'p', texto: 'Texto dinamico..'},
    {tag: 'div', texto: 'Frase 2..'},
    {tag: 'section', texto: 'Frase 3..'},
    {tag: 'footer', texto: 'Frase 4..'}
];

const container = document.querySelector('.container'); //cria a vari dentro da classe selecionada esse e o lugar espe
const div = document.createElement('div'); // cria o elemento dentro do container usando appenchild

for (let i = 0; i<elementos.length; i++) { // vai percorrer o array de objetos
    const {tag, texto} = elementos[i]; // desestrutura o obj e criar uma vari
    let tagCriada = document.createElement(tag) // cria o elemento html
    tagCriada.innerText = texto; // add o conteudo dentro da tag
    div.appendChild(tagCriada); // add dentro da div a tag com o conteudo
}

container.appendChild(div); //cria a div no lugar especifico no caso no container selecionado 