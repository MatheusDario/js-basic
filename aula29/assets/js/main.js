function main() {
    const h1 = document.querySelector('.container h1'); // Selecionando a tag html p modificar
    const data = new Date();
    h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});

    

    // function getDiaSemanaTexto(diaSemana) {
    //     let diaSemanaTexto;

    //     switch (diaSemana) {
    //         case 0:
    //             diaSemanaTexto = 'Domingo';
    //             return diaSemanaTexto;
    //         case 1:
    //              diaSemanaTexto = 'Segunga';
    //             return diaSemanaTexto;
    //         case 2:
    //             diaSemanaTexto = 'Terca';
    //              return diaSemanaTexto;
    //         case 3:
    //             diaSemanaTexto = 'Quarta';
    //             return diaSemanaTexto;
    //         case 4:
    //             diaSemanaTexto = 'Quinta';
    //             return diaSemanaTexto;
    //         case 5:
    //             diaSemanaTexto = 'Sexta-feira';
    //             return diaSemanaTexto;
    //         case 6:
    //             diaSemanaTexto = 'Sabado';
    //             return diaSemanaTexto;
    //     }
    // }

    //h1.innerHTML = getDiaSemanaTexto(data.getDay()); // << Modificando os dados no HTML
}
main();