function relogio() {
    //Exercicio e criar um Timer com Iniciar, pausar e parar <<
    function getTimeFromSeconds(seconds) { // Primeiro pegar a hora converter para 24, colocar em meia noite com UTC 
        const data = new Date(seconds * 1000); // o js recebe em milisegundos * 1000 converte p/ segundos
        return data.toLocaleTimeString(`pt-BR`, {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    const relogio = document.querySelector('.relogio');
    let segundos = 0; // variavel que armazena os segundos 
    let timer;

    function iniciaRelogio() { // vai inicar o contador 
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos); // utilizar o segundos formatado da funcao hora
        }, 1000); // e insere os segundos dentro do html
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado');
        }

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    });

}
relogio();
